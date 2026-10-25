export interface Experience {
  company: string
  position: string
  period: string
  location: string
  description: string
  highlights: string[]
  techStack: string[]
  /** PDF 投递版保留前几条要点；不填则全部保留 */
  pdfHighlights?: number
}

export const experiences: Experience[] = [
  {
    company: '杭州流年光影传媒有限公司',
    position: 'AI 全栈开发 · 核心开发者',
    period: '2026.02 - 至今',
    location: '杭州',
    description: '公司 AI 创作产品线的核心开发者：从字字画布桌面版，到全新架构的 OmniBoard 创作平台（omniboard.tv），再到桌面端 AI 视频 Agent OmniCut。',
    highlights: [
      '主导 OmniBoard 全新架构重写并上线：AI 漫剧 / 剧本 / 分镜 / 视频一体的无限画布工作台，贡献约 2/3 代码提交',
      '设计画布命令总线与按成员 / 画布隔离的撤销历史；节点的类型化端口校验在 UI、API、Agent 三端共用一套规则',
      '搭建画布 Agent 与独立 Omni Agent（规划、流式响应、工具失败恢复），并通过工具清单向外部 Agent 开放 100+ 操作',
      '接入 Seedance、Kling、Wan、MiniMax、Qwen 等多模态模型，配合 FFmpeg / TTS 等 Serverless 媒体函数',
      '负责交付链路：k3s 滚动发布与迁移 Job、国内 / 海外双版本、微信支付 + Stripe 计费、企业电商定制版',
      '独立开发 OmniCut：Electron + Agent Server，75 个剪辑工具、FFmpeg 渲染、本地 ASR、7 类题材 Playbook',
      '早期负责字字画布 v1 / 2.0：Electron 桌面版持续迭代发布；2.0 抽离后端契约，支持桌面 / 嵌入 / SaaS 等 6 种后端',
    ],
    techStack: ['TypeScript', 'React', 'React Flow', 'Fastify', 'PostgreSQL', 'Electron', 'LangGraph', 'FFmpeg', 'k3s'],
  },
  {
    company: '普特教育',
    position: 'AI 训练师',
    period: '2025.11 - 2026.01',
    location: '杭州',
    description: '负责 AI 训练相关工作，协助任务流与输出质量优化。',
    highlights: [
      '参与 AI 训练相关流程与内容整理',
      '支持任务流拆解、反馈整理和结果优化',
      '协助提升模型输出质量与工作流效率',
    ],
    techStack: ['AI 训练', 'Prompt', '数据整理', 'Workflow'],
    pdfHighlights: 2,
  },
  {
    company: '钧誉资产科技有限公司',
    position: '全栈工程师 / 量化开发（实习）',
    period: '2024.06 - 2024.11',
    location: '成都',
    description: '实习期间负责量化投资回测系统的设计、开发与性能优化。',
    highlights: [
      '设计并实现高性能回测引擎，支持多策略并行回测',
      '构建实时行情采集与处理管道，支撑百万级日数据处理',
      '开发策略可视化分析平台，支持收益曲线与风险指标分析',
      '完成核心链路性能优化，将回测速度提升 3 倍',
      '搭建自动化交易执行流程，实现策略信号到订单的闭环',
    ],
    techStack: ['Python', 'Node.js', 'PostgreSQL', 'Redis', 'Vue.js', 'Docker'],
    pdfHighlights: 3,
  },
]

export interface Project {
  name: string
  description: string
  /** 公开仓库或线上地址；私有项目留空，不显示外链 */
  url?: string
  status: string
  techStack: string[]
  highlights: string[]
  category: string
  /** PDF 投递版：保留的要点条数；不填则不进入 PDF */
  pdfHighlights?: number
}

export const categoryIcons: Record<string, string> = {
  'AI 创作平台': 'i-carbon-video',
  'AI Agent 与开源工具': 'i-carbon-machine-learning',
  '全栈产品与图形': 'i-carbon-application',
  '早期项目': 'i-carbon-archive',
}

export const projects: Project[] = [
  // AI 创作平台
  {
    name: 'Interlude 幕间',
    description: '互动影视 / Galgame / 全屏小说 / 聊天小说一体的云端创作 SaaS：无限画布编辑器、AI 创作助手、编辑器内试玩，可导出 Web 包与 Steam 桌面包。',
    status: '个人项目 · 私有仓库',
    techStack: ['React 19', 'Fastify', 'Prisma', 'PostgreSQL', 'pg-boss', 'React Flow', 'Electron', 'Playwright'],
    highlights: [
      '「一核三轴」架构：四种作品形态共用同一套 Schema、编译器、确定性剧情 VM 与存档，新增形态只需注册三处',
      '所有写入统一走「命令 → 补丁 → ChangeSet」，带租约、基线版本与幂等；Postgres NOTIFY → SSE 实时同步',
      '自研可断点续跑的 tool-use 创作 Agent，可直接改写整部作品，一个 ChangeSet 即一步撤销；12 条 AI 生产管线配积分预扣 / 结算 / 退回',
      '共享游戏运行时：存读档、回退、已读快进、QTE、成就、流程图，中英日三语与手柄支持',
      '约 6000 个测试用例（含 100+ Playwright E2E / 无障碍用例），多分辨率视觉 QA，CI 全链路',
    ],
    category: 'AI 创作平台',
    pdfHighlights: 3,
  },
  {
    name: '不夜 Buye',
    description: '24 小时 AI 生成直播：抖音弹幕 → LLM 导演拆镜 → 视频模型 Worker 生成 → RTMP 推流。',
    status: '个人项目 · 私有仓库',
    techStack: ['Python', 'asyncio', 'PyAV', 'FFmpeg / RTMP', 'WebSocket', 'DeepSeek', 'MiniMax'],
    highlights: [
      '模型 Worker 独立进程隔离：控制面 WebSocket JSON，媒体面自包含 MPEG-TS 分块，视频模型可插拔',
      'LLM 双层导演：Planner 产出与模型无关的镜头，Adapter 改写为具体模型 Prompt；支持插队、撤单、投票',
      '生成与播出解耦：恒帧率 Pacer 出帧，无内容时按「定格 → 待机画面 → 片库回放」逐级兜底，保证不断流',
      '合规与成本：常驻 AI 生成标识，本地屏蔽词 + LLM 双重审核且 fail-closed，预算上限控制',
    ],
    category: 'AI 创作平台',
    pdfHighlights: 3,
  },
  // AI Agent 与开源工具
  {
    name: '然然 Bot',
    description: 'Telegram 群聊 AI 机器人，基于自建 Agent Harness（原生 Function Calling 工具循环）。',
    url: 'https://github.com/aimerfeng/ranran-bot',
    status: '开源',
    techStack: ['Python', 'Agent Harness', 'MCP', 'DeepSeek', 'GitHub Actions'],
    highlights: [
      '自研「Provider → 工具调用 → 结果回灌」循环，带步数预算与兜底，支持 DeepSeek 与本机 Codex 双 Provider',
      '多轮自动联网搜索、结果累积与来源去重；嵌套 Skill 包按需加载',
      '通过 MCP Server 对外暴露 7 个工具，可被其他 Agent 复用',
      '205 个测试，GitHub Actions 跑 lint 与覆盖率',
    ],
    category: 'AI Agent 与开源工具',
    pdfHighlights: 3,
  },
  {
    name: 'Motif 母题',
    description: '开源前端设计素材市场：UI 组件、动效、Shader 与 Agent Skill，可实时调参、导出代码，或由 Agent 经 MCP 下单。',
    url: 'https://github.com/aimerfeng/motif',
    status: '开源 · 规划 NFT 化后上线',
    techStack: ['Next.js 16', 'Vercel AI SDK', 'MCP', 'esbuild', 'Solidity', 'viem'],
    highlights: [
      '整合并重新打磨 145 个组件 / 动效 / 区块条目，参数面板由条目定义自动生成，可导出 zip 或 shadcn registry',
      'Studio Agent 生成组件后走与站点同一套 checker / compiler 校验，出错自修并截图自查',
      'MCP 商店（6 个工具）+ llms.txt，153 个可一键安装的 Agent Skill',
      '链上 DAO 审核社区（Registry、Curation、Governor 等 6 个合约）',
    ],
    category: 'AI Agent 与开源工具',
    pdfHighlights: 3,
  },
  {
    name: 'IELTS Study OS',
    description: '本地优先的单用户雅思学习系统：SRS 背词、听读练习、写作 AI 批改、机考模拟与 AI 教练。',
    url: 'https://github.com/aimerfeng/ists',
    status: '开源',
    techStack: ['Next.js 16', 'React 19', 'SQLite', 'Zod', 'OpenAI API', 'Docker'],
    highlights: [
      '支持文本 / PDF / DOCX / 图片 / 音频导入，AI 生成可编辑的练习题',
      'AI Provider 按配置顺序回退，全部失败时降级到确定性本地逻辑，已保存内容不丢',
      'SM-2 变体间隔重复与评分逻辑为纯函数领域层；以 ADR 记录关键架构决策',
    ],
    category: 'AI Agent 与开源工具',
  },
  // 全栈产品与图形
  {
    name: '闪卡 Shanka',
    description: '上传图片或 AI 生图制作随手机倾斜流光的镭射闪卡，含拟真开包、图鉴与分享；一套代码出微信小程序与 iOS App。',
    status: '个人项目 · 私有仓库',
    techStack: ['微信小程序', 'WebGL / GLSL', '微信云开发', 'Capacitor', 'gpt-image'],
    highlights: [
      '自研平台无关的 WebGL 渲染引擎：88 种镭射着色风格、8 档稀有度，卡背全部程序化绘制',
      '纯 JS 实现端侧 GrabCut 抠图，在 Worker 中运行、零依赖',
      'AI 制卡对话每轮输出结构化 JSON，配合盲盒与积分定价模型',
      '发布脚本自动隔离并校验密钥；36 个测试套件',
    ],
    category: '全栈产品与图形',
    pdfHighlights: 2,
  },
  {
    name: '亲小说 v2',
    description: '网络小说平台二期重构：读者端、作者工作台与运营后台，已具备生产形态，待部署推广。',
    status: '个人项目 · 私有仓库',
    techStack: ['Next.js 15', 'Drizzle', 'PostgreSQL', 'Tiptap + Yjs', 'Turborepo', 'Docker'],
    highlights: [
      '为书稿实现类 Git 版本控制：分支、提交、三方合并冲突会话、快照 GC，基于 PG 引用 CAS 与 advisory lock',
      'Tiptap + Yjs 协同编辑；AI 写作对话、行内建议与设定一致性检查，Agent 草稿提案 + 人工审批',
      '约 1300 个测试用例；CI 覆盖迁移校验、PG 契约测试、Docker 镜像构建与容器冒烟',
    ],
    category: '全栈产品与图形',
    pdfHighlights: 2,
  },
  {
    name: 'LOOM 命运织者',
    description: 'Unity 实时牌组动作 Roguelite 垂直切片，评估投入产出后暂停。',
    status: '技术探索 · 已暂停',
    techStack: ['Unity 6', 'URP', 'C#', 'Python'],
    highlights: [
      '箱庭楼层规划、流场寻路与视线、后台存档与检查点，随机种子可复现',
      '内容表经 Python 管线导出；无头 C# 检查工程 + 260+ 个 pytest 保证内容一致性',
      '手写版画排线风格 Shader',
    ],
    category: '全栈产品与图形',
  },
  // 早期项目
  {
    name: 'AI Smart Wallet',
    description: '智能合约钱包，结合 AI 意图解析、ZK 隐私策略与社交恢复。',
    url: 'https://github.com/aimerfeng/AI-Smart-Wallet',
    status: '开源',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'ERC-4337'],
    highlights: [
      '实现 ERC-4337 账户抽象，支持自然语言意图解析交易',
      '社交恢复与守护者机制，ZK 隐私策略保护交易信息',
    ],
    category: '早期项目',
  },
  {
    name: 'Vue Web3 Tip',
    description: 'Vue 3 多链打赏组件，支持 Ethereum、Polygon 与 Solana。',
    url: 'https://github.com/aimerfeng/vue-web3-tip',
    status: '开源 · npm 包',
    techStack: ['Vue 3', 'TypeScript', 'Ethers.js', 'Web3.js'],
    highlights: [
      '集成 MetaMask 与 Phantom 钱包，支持样式自定义与预设金额',
      '已发布为 npm 包，用于个人博客打赏',
    ],
    category: '早期项目',
  },
  {
    name: 'HR QA System',
    description: '智能 HR 问答系统，语义匹配 + LLM 双通道架构。',
    url: 'https://github.com/aimerfeng/hr-qa-system',
    status: '开源',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Vue 3'],
    highlights: [
      '语义匹配命中优先，未命中再走 LLM，支持 GPT / Claude / Gemini 多模型对比',
      '知识库管理与向量检索，前后端分离、Docker 部署',
    ],
    category: '早期项目',
  },
]

export const education = {
  school: '西华师范大学',
  degree: '本科',
  major: '软件工程',
  period: '2021 - 2025',
  location: '四川南充',
}

export const achievements = [
  {
    title: 'ACM-ICPC 四川省赛银牌',
    icon: 'i-carbon-trophy',
    description: '算法竞赛省级银牌，体现扎实的数据结构与算法基础',
    year: '2022',
  },
  {
    title: 'Codeforces Rating 1600+',
    icon: 'i-carbon-chart-line',
    description: '持续参与在线算法竞赛，保持稳定的题感和思维训练',
    year: '2021-2023',
  },
  {
    title: '校级程序设计竞赛一等奖',
    icon: 'i-carbon-star',
    description: '多次获得校内编程竞赛奖项，具备较强的工程实现能力',
    year: '2021',
  },
]

/** PDF 投递版（BOSS 直聘附件）专用内容 */
export const pdfProfile = {
  intent: 'AI 全栈 / AI 应用工程师 / Agent 平台架构',
  cities: '杭州 · 上海',
  onlineResume: 'aimerfeng.github.io/aimerfeng-cv',
  github: 'github.com/aimerfeng',
  email: '2002lihaoran@gmail.com',
  wechat: 'aimerfengllilu',
}

export const strengths = [
  '公司 AI 创作平台 OmniBoard（omniboard.tv）核心开发者，主导全新架构重写并上线，贡献约 2/3 代码提交，覆盖画布、Agent、模型接入、计费与 k3s 交付全链路',
  '擅长 Agent 平台设计：自研 tool-use 工具循环、可撤销写入（命令 → 补丁 → ChangeSet）、MCP 能力开放、失败兜底与成本控制',
  '能独立把产品从 0 做到可交付：个人完成互动叙事创作 SaaS、24 小时 AI 直播、微信小程序等完整项目，重视分层测试与 ADR 架构文档',
]

export const skillLines = [
  { label: 'AI / Agent', text: '自研 Agent Harness（规划、工具调用、失败恢复、断点续跑）、MCP Server、LangGraph；多 Provider 接入、顺序回退与计量计费（DeepSeek / Qwen / Claude / OpenAI）；Seedance、Kling、MiniMax 等视频 / 图像模型生成管线' },
  { label: '前端与图形', text: 'TypeScript、React 19、Next.js、Vue 3；React Flow 无限画布与节点编辑器；自研 WebGL / GLSL 渲染引擎；Electron 桌面端' },
  { label: '后端与数据', text: 'Node.js / Fastify、FastAPI；PostgreSQL（Prisma / Drizzle、pg-boss、NOTIFY）、Redis、S3 / OSS；SSE / WebSocket 实时推送' },
  { label: '媒体处理', text: 'FFmpeg 滤镜图渲染、媒体分析（节拍 / 场景 / 响度）、RTMP 推流、PyAV' },
  { label: '工程交付', text: 'Docker、k3s 滚动发布、GitHub Actions；Vitest / Playwright / pytest 分层测试；ADR 先行 + 编码 Agent 协作开发' },
  { label: '其他', text: 'Python、C# / Unity、Solidity（DAO 治理、ERC-4337）' },
]
