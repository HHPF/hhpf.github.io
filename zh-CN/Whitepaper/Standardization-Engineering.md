---
outline: deep
---

# 系统视野SMD自然疗法疗效 GrowthBook A/B 对照实验计划

> 这是一份结合了**系统医学（Systemic Medicine）**理念与**GrowthBook**（开源A/B测试与功能开关平台）技术特性的实验计划。该计划旨在通过数字化手段（如健康管理App或SaaS平台），验证“多模态自然疗法”对特定亚健康或慢性病人群的综合干预效果。

---

## 1. 实验背景与哲学 (Background & Philosophy)

**系统医学 (SMD) 核心理念：** 人体是一个复杂的动态系统，单一维度的干预往往难以解决系统性失衡。本实验旨在验证“多维度协同干预”（Synergistic Intervention）是否优于单一或基础干预。

**实验载体：** 数字化健康管理平台（App/小程序）。
**测试工具：** GrowthBook (利用其Feature Flagging进行分流，利用其统计引擎进行贝叶斯推断)。

## 2. 实验目标 (Objectives)

*   **核心目标 (North Star Metric):** 验证SMD综合自然疗法对用户**“身心健康综合指数 (Holistic Health Score)”**的提升效果。
*   **次要目标:** 提高患者对治疗方案的**依从性 (Adherence Rate)** 和 **日活跃度 (DAU)**。
*   **探索性目标:** 分析不同体质（如中医九种体质）对不同疗法组合的敏感度。

## 3. 实验假设 (Hypotheses)

*   **H0 (零假设):** 接受SMD综合自然疗法干预的用户，其健康改善程度与接受标准健康建议的用户无显著差异。
*   **H1 (备择假设):** 接受包含正念、食疗、经络、运动等**系统性组合干预**的用户，其“身心健康综合指数”提升幅度显著高于对照组（至少提升 15%）。

## 4. 实验设计 (Experiment Design)

### 4.1 受试人群 (Cohorts)
*   **筛选标准：** 自述有“慢性疲劳”、“轻度失眠”或“亚健康状态”的用户。
*   **样本量预估：** 基于GrowthBook的功效计算器，假设基准转化率为20%，MDE（最小可检测效应）为10%，需每组至少 1,500 名用户。

### 4.2 实验分组 (Variations)

利用 GrowthBook 的 Feature Flag (`smd_therapy_protocol`) 进行确定性哈希分流：

*   **对照组 (Control - Group A): 标准健康教育组**
    *   **内容：** 提供通用的健康资讯文章（如“多喝水”、“早睡早起”）。
    *   **形式：** 静态图文推送。
    *   **干预频率：** 每日1次推送。

*   **实验组 (Variant - Group B): SMD系统干预组**
    *   **内容：** 基于用户画像生成的**定制化**多模态自然疗法组合。
    *   **形式：** 交互式任务卡片 + 多媒体引导。
    *   **包含模块：**
        1.  **正念禅修：** 每日15分钟 `alpha` 波引导音频。
        2.  **食物疗法：** 基于系统判读（如舌象或问卷）推送“今日忌宜”食谱。
        3.  **经络穴位：** 每日特定时辰（子午流注）推送穴位按摩3D动图。
        4.  **运动疗法：** 定制化的八段锦或瑜伽跟练视频。
        5.  **音乐/心理：** 根据当日情绪测评推送的五音疗愈歌单。

### 4.3 流量分配
*   **流量比例：** 50% Control / 50% Variant。
*   **分流键 (Randomization Unit):** `user_id` (确保用户在实验期间体验一致)。

## 5. 指标定义 (Metrics in GrowthBook)

在 GrowthBook 中配置以下 Metrics，数据源接入数仓（如 BigQuery/Snowflake/ClickHouse）。

### 5.1 主要指标 (Primary Metric - 疗效)
*   **名称：** `health_score_improvement_7d`
*   **定义：** 用户第7天自测健康分值 - 第1天基线分值。
*   **类型：** Difference (Mean)。
*   **数据采集：** 每日早晚App内弹出的VAS（视觉模拟评分法）量表 (0-10分)。

### 5.2 次要指标 (Secondary Metrics - 依从性)
*   **名称：** `therapy_completion_rate`
*   **定义：** (每日完成打卡的任务数 / 每日推送任务总数) 的平均值。
*   **类型：** Proportion / Ratio。
*   **关联性：** 验证疗效是否由高依从性带来。

### 5.3 护栏指标 (Guardrail Metrics - 安全与留存)
*   **名称：** `negative_feedback_count`
*   **定义：** 用户反馈“身体不适”或“病情加重”的触发次数。
*   **阈值：** 如果实验组显著高于对照组，自动熔断实验。
*   **名称：** `app_churn_rate`
*   **定义：** 卸载率或连续3日未登录率。

## 6. 实施步骤 (Implementation)

### 第一阶段：SDK集成与属性埋点
在代码中集成 GrowthBook SDK，并传入关键的用户属性（Attributes）用于后续的分层分析：
```json
{
  "id": "user_12345",
  "attributes": {
    "age": 35,
    "gender": "female",
    "tcm_constitution": "yang_deficiency", // 阳虚质
    "stress_level": "high",
    "device": "mobile"
  }
}
```

### 第二阶段：功能开关配置
在 GrowthBook 后台创建 Feature Flag: `systemic_therapy_v1`。
*   **Rule:** 强制覆盖 (Force) `User ID` 在白名单内的内部测试人员。
*   **Experiment:** 针对 `stress_level` != 'none' 的用户开启 A/B 测试。

### 第三阶段：干预执行与数据回流
1.  用户打开App，SDK 请求 GrowthBook 获取分组。
2.  App 根据分组渲染不同的 UI（简单列表 vs 综合仪表盘）。
3.  用户执行操作（冥想、按揉穴位），后端记录事件 Log。
4.  ETL 管道将 Log 转化为 GrowthBook 可读的 SQL 统计表。

## 7. 数据分析计划 (Analysis Plan)

### 7.1 贝叶斯推断
使用 GrowthBook 默认的贝叶斯统计引擎：
*   关注 **"Chance to Beat Control" (优于对照组的概率)**。如果 > 95%，则认为SMD疗法有效。
*   关注 **"Risk" (风险)**。如果采用了新疗法，可能造成的最大预期损失是多少。

### 7.2 维度下钻 (Dimensional Analysis)
利用 GrowthBook 的 Dimensions 功能，回答系统医学最关注的**个体差异**问题：
*   **按“体质”切分：** 气虚质用户是否比痰湿质用户对“经络疗法”反应更好？
*   **按“疗法偏好”切分：** 仅完成“正念+音乐”的用户，与完成“全套SMD”的用户，疗效差异如何？（寻找最佳协同组合）。

## 8. 伦理与风险控制 (Ethics & Safety)

1.  **知情同意：** 所有参与实验的用户必须在App内签署《数字化自然疗法干预知情同意书》。
2.  **非医疗替代声明：** 明确告知用户该方案为辅助疗法，不可替代药物治疗，急重症需及时就医。
3.  **熔断机制：** 监控护栏指标，一旦发现实验组出现异常的身心不适报告率，立即回滚 Feature Flag 至 Control 版本。

## 9. 预期输出 (Deliverables)

实验结束后，输出一份《SMD数字化疗法效能报告》，包含：
1.  **疗效热力图：** 哪些疗法组合对哪类人群提升分数最高。
2.  **因果推断结论：** 确认是“系统性干预”本身起效，还是仅仅因为“安慰剂效应”（通过与纯陪伴式对照组对比）。
3.  **产品迭代建议：** 将验证有效的“Feature (如：子午流注提醒)”固化为全量上线功能。

---

### 附：GrowthBook JSON 配置示例 (伪代码)

```json
{
  "feature": "smd_comprehensive_plan",
  "rules": [
    {
      "variations": [
        "standard_advice",
        "systemic_intervention"
      ],
      "weights": [0.5, 0.5],
      "key": "experiment_smd_001",
      "coverage": 1,
      "condition": {
        "attributes.is_chronic_patient": true
      }
    }
  ]
}
```
