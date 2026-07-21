/*
 * ================================================================
 * 主页内容配置文件 / Homepage content file
 * ================================================================
 * 修改主页文字时，通常只需要编辑这一个文件。
 * 每段双语文字都使用 { en: "English", zh: "中文" } 的格式。
 * 修改后保存、刷新浏览器即可预览。
 */

window.SITE_CONTENT = {
  site: {
    title: { en: "Bang An · Homepage", zh: "安邦 · 个人主页" },
    brandInitials: "NEU",
    lastUpdated: "July 2026",
  },

  profile: {
    name: { en: "Bang An", zh: "安邦" },
    role: { en: "Ph.D. Candidate in Software Engineering", zh: "软件工程博士研究生" },
    institution: { en: "Northeastern University", zh: "东北大学" },
    location: { en: "Shenyang, China", zh: "沈阳，中国" },
    email: "anb@mails.neu.edu.cn",
    avatar: "assets/avatar.jpg",
    bio: {
      en: "I build intelligent systems that learn, reason, and collaborate with people.",
      zh: "我致力于构建能够学习、推理并与人协作的智能系统。",
    },
    links: [
      { label: "Email", url: "mailto:anb@mails.neu.edu.cn", icon: "mail" },
      { label: "GitHub", url: "https://github.com/BangAnA", icon: "github" },
      { label: "Google Scholar", url: "", icon: "scholar" },
      { label: "CV", url: "", icon: "file" },
    ],
  },

  openings: {
    enabled: false,
    label: { en: "Openings", zh: "招生信息" },
    title: { en: "We are looking for curious minds.", zh: "期待好奇且自驱的你加入。" },
    description: {
      en: "I am looking for motivated students and collaborators interested in AI, computer vision, and multimodal learning. Please email me with your CV and a short introduction.",
      zh: "现招募对人工智能、计算机视觉和多模态学习感兴趣的学生与合作者。请通过邮件发送个人简历及简短自我介绍。",
    },
    tags: [
      { en: "Research interns", zh: "科研实习生" },
      { en: "Graduate students", zh: "硕博研究生" },
      { en: "Collaborators", zh: "合作伙伴" },
    ],
  },

  about: {
    title: { en: "About", zh: "个人简介" },
    // 在 url 中填写导师主页地址；留空时只显示导师姓名，不生成链接。
    advisor: {
      name: { en: " Ruiyun Yu", zh: "于瑞云" },
      url: "https://yuryneu.github.io/",
    },
    paragraphs: [
      {
        en: "I am a Ph.D. candidate at <strong>Northeastern University</strong>, advised by Prof.{{advisor}}. Enrolled in the Software College of Northeast University in 2019, entered the integrated undergraduate, master's and doctoral program in 2020, and obtained the bachelor's degree in Software Engineering from Northeast University in 2023.",
        zh: "我是<strong>东北大学</strong>博士研究生，导师为{{advisor}}教授。2019年入学东北大学软件学院，2020年进入本硕博贯通培养计划，2023年获得东北大学软件工程本科学位。",
      },
      {
        en: "My long-term goal is to develop generalizable and trustworthy AI systems. I enjoy turning research ideas into reproducible code and practical applications.",
        zh: "我的长期目标是开发具有泛化能力且值得信赖的人工智能系统。我也热衷于将研究想法转化为可复现的代码与实际应用。",
      },
    ],
    interests: [
      { en: "Computer Vision", zh: "计算机视觉" },
      { en: "Image Generation", zh: "图片生成" },
      { en: "Defect Detection", zh: "缺陷检测" },
      { en: "Industrial Anomaly Detection", zh: "工业异常检测" },
    ],
  },

  news: {
    title: { en: "News", zh: "最新动态" },
    items: [
      {
        date: "2026.04",
        en: "🎉🎉Our paper addressed defect detection is accepted by ICME 2026!",
        zh: "🎉🎉一篇缺陷检测的论文被Machines录用。",
      },
      {
        date: "2026.03",
        en: "🎉🎉Our paper addressed few-shot defect detection is accepted by ICME 2026!",
        zh: "🎉🎉一篇小样本缺陷检测的论文被ICME2026录用。",
      },
      {
        date: "2023.06",
        en: "🎉🎉I was awarded the title of Outstanding Graduate of the Province!",
        zh: "🎉🎉我获得了省优秀毕业生荣誉称号。",
      },
    ],
  },

  research: {
    title: { en: "Research", zh: "研究方向" },
    items: [
      {
        number: "01",
        title: { en: "Image Generation", zh: "图片生成" },
        description: {
          en: "Learn the data distribution of real images, and generate brand-new, high-fidelity visual content based on conditions such as text, contours, and reference images.",
          zh: "学习真实图像的数据分布，依据文本、轮廓、参考图像等条件生成全新、高保真的视觉内容。",
        },
      },
      {
        number: "02",
        title: { en: "Defect Detection", zh: "缺陷检测" },
        description: {
          en: "Identify various abnormal defects on the surface of industrial products, and achieve defect location and classification.",
          zh: "识别工业产品表面各类异常瑕疵，实现缺陷定位、分类与量化评估。",
        },
      },
      {
        number: "03",
        title: { en: "Industrial Anomaly Detection", zh: "工业异常检测" },
        description: {
          en: "By using available normal samples to model the normal distribution of product characteristic features, and identifying and locating various unknown and rare defects on the production workpieces.",
          zh: "依靠有限甚至仅有的正常样本建模产品常态特征分布，识别、定位生产工件上未知、少见的各类缺陷。",
        },
      },
    ],
  },

  publications: {
    title: { en: "Selected Publications", zh: "代表性论文" },
    note: {
      en: "# co-first author; * corresponding author",
      zh: "# 共同第一作者； * 通讯作者",
    },
    items: [
      {
        year: "2026",
        badge: { en: "Conference 2026", zh: "国际会议 2026" },
        title: "Your Paper Title: A Clear and Informative Description of the Work",
        authors: "<strong>Your Name</strong>, Coauthor One, Coauthor Two",
        venue: "Conference on Artificial Intelligence (Conference)",
        description: {
          en: "A one-sentence summary of the core problem, method, and result.",
          zh: "用一句话概括论文研究问题、核心方法与主要结果。",
        },
        image: {
          src: "",
          alt: { en: "Overview of the 2026 publication", zh: "2026 年论文示意图" },
        },
        links: [
          { label: "Paper", url: "#" },
          { label: "Code", url: "#" },
          { label: "Project", url: "#" },
        ],
      },
      {
        year: "2026",
        badge: { en: "Journal 2026", zh: "期刊论文 2026" },
        title: "MulPViT-SimAM: An Electronic Substrate Defect Detection Framework for Addressing Class Imbalance Problems",
        authors: "Yuting Wang#, Liming Sun#, <strong>Bang An</strong>, Ruiyun Yu",
        venue: "Machines",
        description: {
          en: "Briefly explain why this work matters and what makes it different.",
          zh: "简要说明这项工作的重要性及其创新之处。",
        },
        image: {
          src: "",
          alt: { en: "Overview of the 2025 publication", zh: "2025 年论文示意图" },
        },
        links: [
          { label: "Paper", url: "#" },
          { label: "Code", url: "#" },
          { label: "Project", url: "#" },
        ],
      },
      {
        year: "2026",
        badge: { en: "Conference 2026", zh: "国际会议 2026" },
        title: "VIGIL: Vision-Language Industrial Grounding for Few-shot Defect Detection",
        authors: "Jianing Duan#, Yuting Wang#, Ruiyun Yu*, Bingyang Guo, Haoyuan Li, <strong>Bang An</strong>",
        venue: "IEEE International Conference on Multimedia and Expo 2026",
        description: {
          en: "Add a short plain-language explanation so visitors can quickly understand the contribution.",
          zh: "添加一段简明说明，帮助访问者快速理解论文贡献。",
        },
        image: {
          src: "",
          alt: { en: "Overview of the 2024 publication", zh: "2024 年论文示意图" },
        },
        links: [{ label: "Paper", url: "#" }],
      },
    ],
  },

  projects: {
    title: { en: "Projects", zh: "项目与开源" },
    items: [
      {
        status: { en: "Featured project", zh: "重点项目" },
        title: { en: "Open Research Toolkit", zh: "开放研究工具箱" },
        description: {
          en: "A reproducible toolkit for training, evaluating, and visualizing modern machine learning models.",
          zh: "一个用于训练、评估和可视化现代机器学习模型的可复现工具箱。",
        },
        technologies: ["Python", "PyTorch", "Web Demo"],
        link: "https://github.com/yourusername",
      },
      {
        status: { en: "Dataset", zh: "数据集" },
        title: { en: "A New Benchmark", zh: "新型基准数据集" },
        description: {
          en: "A carefully curated benchmark designed to evaluate models under challenging real-world conditions.",
          zh: "一个经过精心整理的基准数据集，用于评估模型在复杂真实条件下的表现。",
        },
        technologies: ["Benchmark", "Evaluation", "Open Source"],
        link: "#",
      },
    ],
  },

  experience: {
    title: { en: "Experience & Education", zh: "经历与教育" },
    items: [
      {
        period: "2023 — Present",
        title: { en: "Ph.D. in Software Engineering", zh: "软件工程博士" },
        place: { en: "Northeastern University · Shenyang", zh: "东北大学 · 沈阳" },
        detail: { en: "Advisor: Prof. Ruiyun Yu", zh: "导师：于瑞云教授" },
      },
      {
        period: "2019 — 2023",
        title: { en: "B.Eng. in Software Engineering", zh: "软件工程学士" },
        place: { en: "Northeastern University · Shenyang", zh: "东北大学 · 沈阳" },
        detail: { en: "Outstanding Graduates of the Province in 2023", zh: "2023年省优秀毕业生" },
      },
    ],
  },

  service: {
    title: { en: "Academic Service", zh: "学术服务" },
    items: [
      {
        en: "Reviewer: Pattern Recognition, IEEE Transactions on Industrial Informatics(TII), and IEEE Transactions on Systems, Man, and Cybernetics: Systems(TSMC)",
        zh: "审稿人：PR、TII、TSMC",
      },
      {
        en: "Teaching assistant: Advanced Artificial Intelligence",
        zh: "课程助教：高级人工智能",
      },
      {
        en: "Leader: Rui Innovation Team of Software College of Northeast University",
        zh: "负责人：东北大学软件学院睿创新团队",
      },
    ],
  },

  footer: {
    text: {
      en: "Designed for GitHub Pages. Built with plain HTML, CSS, and JavaScript.",
      zh: "为 GitHub Pages 设计，使用原生 HTML、CSS 与 JavaScript 构建。",
    },
  },
};
