export interface SocialLink {
  icon: string
  url: string
  title: string
  isWeChat?: boolean
  popupText?: string
}

export const siteMeta = {
  title: 'AimerFeng | CV',
  description: 'AimerFeng 的个人简历站，展示经历、项目、技术栈与文章。',
}

export const profile = {
  displayName: 'AimerFeng',
  chineseName: '然然',
  location: '杭州，中国',
  summary: 'AI 全栈开发，专注把复杂需求拆成清晰、可用、能落地的产品与系统。',
  tags: ['前端工程师', 'AI 全栈开发', '区块链开发', 'AI 应用'],
  socialLinks: [
    { icon: 'i-carbon-logo-github', url: 'https://github.com/aimerfeng', title: 'GitHub' },
    { icon: 'i-carbon-logo-x', url: 'https://x.com/aimer71976', title: 'X (Twitter)' },
    { icon: 'i-carbon-email', url: 'mailto:2002lihaoran@gmail.com', title: 'Email' },
    { icon: 'i-carbon-blog', url: 'https://aimer-feng-blog.vercel.app/', title: 'Blog' },
    { icon: 'i-carbon-document', url: 'https://blog.csdn.net/qq_61185581', title: 'CSDN' },
    {
      icon: 'i-carbon-chat',
      url: '#',
      title: '微信',
      isWeChat: true,
      popupText: '微信: aimerfengllilu',
    },
  ] satisfies SocialLink[],
}

export const navItems = [
  { id: 'header', icon: 'i-carbon-user', label: '简介' },
  { id: 'tech-stack', icon: 'i-carbon-code', label: '技术栈' },
  { id: 'experience', icon: 'i-carbon-building', label: '经历' },
  { id: 'projects', icon: 'i-carbon-cube', label: '项目' },
  { id: 'education', icon: 'i-carbon-education', label: '教育' },
  { id: 'articles', icon: 'i-carbon-document', label: '文章' },
]
