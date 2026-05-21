/* ========================================
   个人作品集 - JavaScript 交互功能
   ======================================== */

// =========================================
// 多语言翻译数据
// =========================================
const translations = {
  zh: {
    "nav.logo": "我的作品集",
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.contact": "联系",
    "lang.btn": "EN",
    "hero.greeting": "你好，我是",
    "hero.subtitle": "Python Developer",
    "hero.description": "擅长消息中间件、实时数据处理与高可用架构设计。",
    "hero.cta_projects": "查看作品",
    "hero.cta_contact": "联系我",
    "about.title": "关于我",
    "about.intro_p1": "Python Developer，擅长消息中间件、实时数据处理、高可用架构设计。",
    "about.intro_p2": "喜欢 Rust、幸运星、孤独摇滚、摇曳露营。",
    "about.timeline_title": "专业经历",
    "about.achievements_title": "个人成就",
    "timeline.1.title": "软件工程师",
    "timeline.1.org": "OpenAI",
    "timeline.2.title": "软件工程师",
    "timeline.2.org": "Google",
    "timeline.3.title": "硕士 · 计算机科学",
    "timeline.3.org": "斯坦福大学",
    "timeline.4.title": "本科 · 计算机科学与技术",
    "timeline.4.org": "清华大学",
    "achievement.1.title": "清华大学优秀毕业生",
    "achievement.1.org": "清华大学",
    "achievement.2.title": "微软 MVP",
    "achievement.2.org": "微软最有价值专家",
    "achievement.3.title": "华为开发者认证",
    "achievement.3.org": "华为开发者专家认证",
    "projects.title": "我的项目",
    "skills.title": "技能",
    "contact.title": "联系我",
    "contact.name_label": "姓名",
    "contact.email_label": "邮箱",
    "contact.message_label": "留言",
    "contact.name_placeholder": "请输入姓名",
    "contact.email_placeholder": "请输入邮箱",
    "contact.message_placeholder": "请输入留言内容",
    "contact.submit": "发送消息",
    "footer.copyright": "© 2025 张三. All rights reserved.",
    "project.1.title": "电商平台",
    "project.1.desc": "一个全功能的在线购物平台，支持商品浏览、购物车和订单管理。",
    "project.2.title": "任务管理应用",
    "project.2.desc": "基于 React 的看板式任务管理工具，支持拖拽排序和团队协作。",
    "project.3.title": "天气预报应用",
    "project.3.desc": "实时天气查询应用，集成第三方天气 API，支持城市搜索。",
    "form.required": "请填写所有字段。",
    "form.invalid_email": "请输入有效的邮箱地址。",
    "form.success": "感谢 {name}，您的消息已成功发送！我会尽快回复。",
  },
  en: {
    "nav.logo": "My Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "lang.btn": "中",
    "hero.greeting": "Hi, I'm",
    "hero.subtitle": "Python Developer",
    "hero.description": "Specializing in message brokers, real-time data processing, and high-availability architecture.",
    "hero.cta_projects": "View Projects",
    "hero.cta_contact": "Contact Me",
    "about.title": "About Me",
    "about.intro_p1": "Python Developer specializing in message brokers, real-time data processing, and high-availability architecture.",
    "about.intro_p2": "Loves Rust, Lucky Star, Bocchi the Rock!, and Laid-Back Camp.",
    "about.timeline_title": "Experience",
    "about.achievements_title": "Achievements",
    "timeline.1.title": "Software Engineer",
    "timeline.1.org": "OpenAI",
    "timeline.2.title": "Software Engineer",
    "timeline.2.org": "Google",
    "timeline.3.title": "M.Sc. Computer Science",
    "timeline.3.org": "Stanford University",
    "timeline.4.title": "B.Eng. Computer Science",
    "timeline.4.org": "Tsinghua University",
    "achievement.1.title": "Outstanding Graduate",
    "achievement.1.org": "Tsinghua University",
    "achievement.2.title": "Microsoft MVP",
    "achievement.2.org": "Most Valuable Professional",
    "achievement.3.title": "Huawei Developer Certification",
    "achievement.3.org": "Huawei Developer Expert",
    "projects.title": "My Projects",
    "skills.title": "Skills",
    "contact.title": "Contact Me",
    "contact.name_label": "Name",
    "contact.email_label": "Email",
    "contact.message_label": "Message",
    "contact.name_placeholder": "Enter your name",
    "contact.email_placeholder": "Enter your email",
    "contact.message_placeholder": "Enter your message",
    "contact.submit": "Send Message",
    "footer.copyright": "© 2025 Zhang San. All rights reserved.",
    "project.1.title": "E-Commerce Platform",
    "project.1.desc": "A full-featured online shopping platform with product browsing, cart, and order management.",
    "project.2.title": "Task Management App",
    "project.2.desc": "A Kanban-style task management tool built with React, supporting drag-and-drop and team collaboration.",
    "project.3.title": "Weather Forecast App",
    "project.3.desc": "Real-time weather query app integrating third-party weather APIs with city search.",
    "form.required": "Please fill in all fields.",
    "form.invalid_email": "Please enter a valid email address.",
    "form.success": "Thank you {name}, your message has been sent! I'll get back to you soon.",
  },
};

// 当前语言（从 localStorage 读取，默认中文）
let currentLang = localStorage.getItem("lang") || "zh";

// =========================================
// DOM 元素引用
// =========================================
document.addEventListener("DOMContentLoaded", function () {
  // 导航栏元素
  const navMenu = document.getElementById("navMenu");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const langToggle = document.getElementById("langToggle");

  // 项目区域
  const projectsGrid = document.getElementById("projectsGrid");

  // 技能区域
  const skillsList = document.getElementById("skillsList");

  // 联系表单
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  // =========================================
  // 项目 & 技能数据（语言无关部分）
  // =========================================

  // 项目数据（标签和图片不依赖语言）
  const projectsData = [
    {
      tags: ["Vue.js", "Node.js", "MongoDB"],
      image: "https://picsum.photos/seed/ecommerce/400/250",
    },
    {
      tags: ["React", "TypeScript", "Firebase"],
      image: "https://picsum.photos/seed/taskmanager/400/250",
    },
    {
      tags: ["JavaScript", "REST API", "CSS3"],
      image: "https://picsum.photos/seed/weather/400/250",
    },
  ];

  // 技能数据（技能名称本身是英文，不依赖语言）
  const skillsData = [
    { name: "Python", level: 92 },
    { name: "MongoDB", level: 88 },
    { name: "Next.js", level: 76 },
    { name: "ElasticSearch", level: 72 },
    { name: "Rust", level: 55 },
  ];

  // =========================================
  // 函数定义
  // =========================================

  /**
   * 切换移动端导航菜单
   */
  function toggleMenu() {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  }

  /**
   * 关闭移动端导航菜单
   */
  function closeMenu() {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  }

  /**
   * 高亮当前页面导航链接
   */
  function setActiveNavLink() {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll("section[id]");

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  /**
   * 渲染项目卡片（使用当前语言）
   */
  function renderProjects() {
    // 清空容器
    projectsGrid.innerHTML = "";

    projectsData.forEach(function (project, index) {
      const card = document.createElement("article");
      card.className = "project-card";

      // 从翻译数据获取标题和描述
      const titleKey = "project." + (index + 1) + ".title";
      const descKey = "project." + (index + 1) + ".desc";
      const title = translations[currentLang][titleKey];
      const desc = translations[currentLang][descKey];

      const tagsHTML = project.tags
        .map(function (tag) {
          return '<span class="project-tag">' + tag + "</span>";
        })
        .join("");

      card.innerHTML =
        '<div class="project-card-image">' +
        '<img src="' + project.image + '" alt="' + title + '" loading="lazy">' +
        "</div>" +
        '<div class="project-card-body">' +
        "<h3>" +
        title +
        "</h3>" +
        "<p>" +
        desc +
        "</p>" +
        "<div>" +
        tagsHTML +
        "</div>" +
        "</div>";

      projectsGrid.appendChild(card);
    });
  }

  /**
   * 渲染技能条
   */
  function renderSkills() {
    skillsList.innerHTML = "";

    skillsData.forEach(function (skill) {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";

      skillItem.innerHTML =
        '<span class="skill-name">' +
        skill.name +
        "</span>" +
        '<div class="skill-bar">' +
        '<div class="skill-bar-fill" data-level="' +
        skill.level +
        '"></div>' +
        "</div>";

      skillsList.appendChild(skillItem);
    });

    // 滚动进入视口时动画填充技能条
    animateSkillBars();
  }

  /**
   * 技能条动画 - 使用 IntersectionObserver
   */
  function animateSkillBars() {
    const skillFills = document.querySelectorAll(".skill-bar-fill");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const level = entry.target.getAttribute("data-level");
              entry.target.style.width = level + "%";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      skillFills.forEach(function (fill) {
        observer.observe(fill);
      });
    } else {
      // 降级处理：直接显示所有技能条
      skillFills.forEach(function (fill) {
        fill.style.width = fill.getAttribute("data-level") + "%";
      });
    }
  }

  /**
   * 处理联系表单提交
   */
  function handleFormSubmit(event) {
    event.preventDefault(); // 阻止页面刷新

    // 获取表单数据
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const t = translations[currentLang];

    // 简单的表单验证
    if (!name || !email || !message) {
      formFeedback.textContent = t["form.required"];
      formFeedback.className = "form-feedback error";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formFeedback.textContent = t["form.invalid_email"];
      formFeedback.className = "form-feedback error";
      return;
    }

    // 模拟发送
    formFeedback.textContent = t["form.success"].replace("{name}", name);
    formFeedback.className = "form-feedback success";

    // 重置表单
    contactForm.reset();

    // 3 秒后清除反馈消息
    setTimeout(function () {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }, 3000);
  }

  /**
   * 切换语言
   */
  function setLanguage(lang) {
    currentLang = lang;

    // 1) 更新所有 data-i18n 元素的文本
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      var text = translations[lang][key];
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // 2) 更新所有 data-i18n-placeholder 元素的 placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      var text = translations[lang][key];
      if (text !== undefined) {
        el.setAttribute("placeholder", text);
      }
    });

    // 3) 更新文档 lang 属性
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

    // 4) 重新渲染动态内容（项目卡片）
    renderProjects();

    // 5) 保存偏好到 localStorage
    localStorage.setItem("lang", lang);
  }

  // =========================================
  // 事件绑定
  // =========================================

  // 移动端菜单切换
  menuToggle.addEventListener("click", toggleMenu);

  // 点击导航链接后自动关闭菜单
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // 滚动时高亮当前导航
  window.addEventListener("scroll", setActiveNavLink);

  // 语言切换
  langToggle.addEventListener("click", function () {
    var newLang = currentLang === "zh" ? "en" : "zh";
    setLanguage(newLang);
  });

  // 表单提交
  contactForm.addEventListener("submit", handleFormSubmit);

  // =========================================
  // 初始化
  // =========================================

  // 渲染项目卡片
  renderProjects();

  // 渲染技能条
  renderSkills();

  // 应用已保存的语言设置
  setLanguage(currentLang);

  // 控制台输出
  console.log("🚀 个人作品集网站已加载完成！当前语言:", currentLang === "zh" ? "中文" : "English");
});
