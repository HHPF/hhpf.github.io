const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 新闻目录路径
const NEWS_DIR = path.join(__dirname, 'zh-CN', 'News');
// 新闻首页路径
const NEWS_INDEX_PATH = path.join(NEWS_DIR, 'index.md');

// 读取新闻目录下的所有md文件
const readNewsFiles = () => {
  const files = fs.readdirSync(NEWS_DIR);
  const newsFiles = files.filter(file => file.endsWith('.md') && file !== 'index.md');
  
  return newsFiles;
};

// 解析新闻文件，提取frontmatter和摘要
const parseNewsFile = (file) => {
  const filePath = path.join(NEWS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: body } = matter(content);
  
  // 从frontmatter获取数据
  const date = data.date || new Date().toISOString();
  const title = data.title || '未命名新闻';
  
  // 生成摘要：优先使用frontmatter中的description，否则从内容中提取前150个字符
  const description = data.description || body.replace(/\n/g, ' ').replace(/\s+/g, ' ').substring(0, 150) + '...';
  
  return {
    date,
    title,
    description,
    file
  };
};

// 生成Markdown格式的新闻列表
const generateNewsMarkdown = (newsData) => {
  let markdown = '';
  
  newsData.forEach(news => {
    const formattedDate = new Date(news.date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const link = `/zh-CN/News/${news.file.replace('.md', '')}`;
    
    markdown += `## [${news.title}](${link})\n\n`;
    markdown += `**${formattedDate}**\n\n`;
    markdown += `${news.description}\n\n`;
  });
  
  return markdown;
};

// 更新新闻首页
const updateNewsIndex = () => {
  const newsFiles = readNewsFiles();
  const newsData = newsFiles.map(file => parseNewsFile(file));
  
  // 按日期降序排序
  newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // 生成新闻列表Markdown
  const newsMarkdown = generateNewsMarkdown(newsData);
  
  // 读取当前首页内容，保留frontmatter
  const currentContent = fs.readFileSync(NEWS_INDEX_PATH, 'utf8');
  const { data } = matter(currentContent);
  
  // 生成新的首页内容
  const newContent = matter.stringify(newsMarkdown, data);
  
  // 写入更新后的首页
  fs.writeFileSync(NEWS_INDEX_PATH, newContent, 'utf8');
  
  console.log(`✅ 新闻首页已更新，共生成 ${newsData.length} 条新闻`);
  console.log('📄 更新文件：', NEWS_INDEX_PATH);
};

// 检查是否安装了gray-matter
const checkDependencies = () => {
  try {
    require('gray-matter');
    return true;
  } catch (error) {
    return false;
  }
};

// 主函数
const main = () => {
  if (!checkDependencies()) {
    console.error('❌ 缺少依赖 gray-matter，请先安装：npm install gray-matter');
    process.exit(1);
  }
  
  updateNewsIndex();
};

main();