(function () {
    const STORAGE_KEY = "wds-language";
    const DEFAULT_LANG = "en";

    const common = {
        en: {
            title: "Assistant Prof. @ SZU",
            nav: {
                "index.shtml.html": "Home",
                "research.shtml.html": "Research",
                "publications.shtml.html": "Publications",
                "teaching.shtml.html": "Teaching",
                "people.shtml.html": "People",
                "professional.shtml.html": "Professional",
                "contact.shtml.html": "Contact"
            },
            footer: 'Last updated on <time datetime="2026-06-09">June 9th, 2026</time>. Designed by GPT-4. &copy; Dongsheng Wang.'
        },
        zh: {
            title: "深圳大学助理教授",
            nav: {
                "index.shtml.html": "主页",
                "research.shtml.html": "研究方向",
                "publications.shtml.html": "发表论文",
                "teaching.shtml.html": "教学",
                "people.shtml.html": "成员",
                "professional.shtml.html": "学术服务",
                "contact.shtml.html": "联系"
            },
            footer: '<time datetime="2026-06-09">2026年6月9日</time>更新。Designed by GPT-4. &copy; Dongsheng Wang.'
        }
    };

    const pages = {
        "index.shtml.html": {
            en: {
                headings: ["About me", "Open Positions", "News"],
                about: [
                    'I currently serve as an Assistant Professor with the <a href="https://vcc.tech/index">VCC group</a> at the <a href="https://csse.szu.edu.cn/"> College of Computer Science and Software Engineering</a>, <a href="https://www.szu.edu.cn/index.htm">Shenzhen University</a>. I earned my Ph.D at <a href="https://www.xidian.edu.cn/">Xidian University</a> in 2024, and obtained my B.Sc from the same university in 2018. My Ph.D advisor was Prof. <a href="https://web.xidian.edu.cn/bchen/">Chen Bo</a>.',
                    "My long-term research goal is to build reliable AI systems that can perceive, reason, learn from feedback, and eventually act intelligently in the physical world.",
                    "We aim to develop principled algorithms and practical systems that connect perception, language, decision-making, and action. In particular, we are excited about embodied intelligence: AI agents that can understand human intent, learn from complex environments, and assist people in the real world. We welcome students who are curious, self-motivated, and eager to explore ambitious ideas at the frontier of AGI."
                ],
                topics: [
                    "<strong>Embodied AI:</strong> Vision-language-action models, world models, agents, and reward models.",
                    "<strong>Multimodal understanding & reasoning:</strong> Multimodal large language models, multimodal retrieval, and visual question answering.",
                    "<strong>Machine learning & Bayesian analysis:</strong> Variational inference, hierarchical models, and optimal transport."
                ],
                positions: [
                    "<strong>We are actively looking for motivated undergraduate and Master students</strong> who are excited about embodied AI, multimodal foundation models, Bayesian machine learning, and related areas. If you enjoy asking bold questions and building real systems, please feel free to send me your CV.",
                    '<strong>Students will have opportunities to work on frontier research problems</strong> with the goal of publishing at top AI/ML/CV conferences. Please refer to <a href="research.shtml.html">Research</a> and <a href="publications.shtml.html">Publications</a> for our recent work. Outstanding students can be recommended to leading universities for Ph.D. studies.',
                    "<strong>I also welcome informal conversations with junior PhD, Master, and undergraduate students.</strong> If you would like to discuss research ideas, career plans, or the future of AGI and embodied intelligence, feel free to contact me. I set aside time each week for these conversations."
                ],
                news: [
                    "[05/2026] One paper is accepted by ICML 2026 (Zero-Shot 3D Question Answering via KeyVT). Our first paper to 3D world. Congratulations to all coauthors!",
                    "[02/2026] Two papers are accepted by CVPR 2026 (SparseSAE and STiTch for Zero-Shot Composed Image Retrieval). Congratulations to all coauthors!",
                    "[07/2025] One paper is accepted by ICCV 2025 (Dynamic Multimodal Prototype Learning for CLIP). Congratulations to Xinyu!",
                    "[05/2025] One paper is accepted by IJCAI 2025 (Consistency Alignment for the Compositional Zero-Shot task). Congratulations to Miaoge!",
                    "[07/2024] We are presenting one paper at ECCV 2024 (Instruction Tuning-free Visual Token Complement for MLLMs), and one paper at UAI 2024 (Patch-Prompt Aligned Bayesian Prompt Tuning for Vision-Language Models). Congratulations to my coauthors!",
                    "[07/2024] Hello, SZU. I accept the offer from Shenzhen University and join the VCC group at College of Computer Science and Software Engineering as an Assistant Professor. The next level of my academic journey is about to begin.",
                    "I regularly serve as a reviewer for top-tier conferences and journals, including NeurIPS, ICML, ICLR, CVPR, ICCV, ECCV, TPAMI, IJCV, TKDE, and TNNLS."
                ]
            },
            zh: {
                headings: ["关于我", "招生信息", "实验室动态"],
                about: [
                    '我目前任职于<a href="https://www.szu.edu.cn/index.htm">深圳大学</a><a href="https://csse.szu.edu.cn/">计算机与软件学院</a><a href="https://vcc.tech/index">VCC 课题组</a>，担任助理教授。我于 2024 年在<a href="https://www.xidian.edu.cn/">西安电子科技大学</a>获得博士学位，2018 年在西安电子科技大学获得学士学位，博士导师为<a href="https://web.xidian.edu.cn/bchen/">陈波教授</a>。',
                    "我的长期研究目标是构建可靠的人工智能系统，使其能够感知世界、进行推理、从反馈中学习，并最终在真实物理世界中智能行动。",
                    "我们希望发展兼具理论原则和工程落地能力的算法与系统，将感知、语言、决策和行动连接起来。我们尤其关注具身智能：能够理解人类意图、从复杂环境中学习并在现实世界中帮助人类的 AI 智能体。欢迎有好奇心、主动性强，并愿意探索 AGI 前沿问题的同学加入。"
                ],
                topics: [
                    "<strong>具身智能：</strong>VLA 模型、world model、智能体和 reward model。",
                    "<strong>多模态理解与推理：</strong>多模态大模型、多模态检索和视觉问答。",
                    "<strong>机器学习与贝叶斯分析：</strong>变分推断、层次模型和最优传输。"
                ],
                positions: [
                    "<strong>我们正在招收有热情的本科生和硕士生</strong>，方向包括具身智能、多模态基础模型、贝叶斯机器学习及相关领域。如果你喜欢提出大胆问题，也愿意动手构建真实系统，欢迎发送简历联系我。",
                    '<strong>学生将有机会参与前沿研究问题</strong>，目标是在 AI/ML/CV 顶级会议发表论文。近期工作可参考<a href="research.shtml.html">研究方向</a>和<a href="publications.shtml.html">发表论文</a>。优秀学生可推荐到国内外优秀高校继续攻读博士学位。',
                    "<strong>我也欢迎低年级博士生、硕士生和本科生进行非正式交流。</strong>如果你想讨论研究想法、职业规划，或 AGI 与具身智能的未来，欢迎联系我。我每周会专门留出时间进行这类交流。"
                ],
                news: [
                    "[05/2026] 一篇论文被 ICML 2026 接收（Zero-Shot 3D Question Answering via KeyVT）。这是我们第一篇面向 3D 世界理解的论文，祝贺所有合作者！",
                    "[02/2026] 两篇论文被 CVPR 2026 接收（SparseSAE 和用于零样本组合图像检索的 STiTch）。祝贺所有合作者！",
                    "[07/2025] 一篇论文被 ICCV 2025 接收（Dynamic Multimodal Prototype Learning for CLIP）。祝贺 Xinyu！",
                    "[05/2025] 一篇论文被 IJCAI 2025 接收（Consistency Alignment for the Compositional Zero-Shot task）。祝贺 Miaoge！",
                    "[07/2024] 我们将在 ECCV 2024 展示一篇论文（Instruction Tuning-free Visual Token Complement for MLLMs），并在 UAI 2024 展示一篇论文（Patch-Prompt Aligned Bayesian Prompt Tuning for Vision-Language Models）。祝贺所有合作者！",
                    "[07/2024] Hello, SZU。我接受深圳大学邀请，加入计算机与软件学院 VCC 课题组，担任助理教授，开启新的学术阶段。",
                    "我长期担任 NeurIPS、ICML、ICLR、CVPR、ICCV、ECCV、TPAMI、IJCV、TKDE 和 TNNLS 等顶级会议与期刊审稿人。"
                ]
            }
        },
        "research.shtml.html": {
            en: {
                headings: ["Research Interests"],
                paragraphs: [
                    "My research focuses on reliable AI systems that can model complex and uncertain data. I am broadly interested in probabilistic machine learning, generative models, and multimodal representation learning.",
                    'Please refer to <a href="publications.shtml.html">Publications</a> for recent work from our group.'
                ],
                topics: [
                    "<strong>Probabilistic machine learning & Bayesian analysis:</strong> Variational inference, hierarchical models, matrix factorization, and uncertainty-aware modeling.",
                    "<strong>Generative models:</strong> Diffusion-based models, auto-regressive models, and efficient adaptation for downstream tasks.",
                    "<strong>Multimodal representation learning:</strong> Vision-language models, multimodal large language models, and domain alignment."
                ]
            },
            zh: {
                headings: ["研究方向"],
                paragraphs: [
                    "我的研究聚焦于可靠人工智能系统，尤其关注如何建模复杂且充满不确定性的数据。我主要研究概率机器学习、生成模型和多模态表征学习。",
                    '近期工作请参考<a href="publications.shtml.html">发表论文</a>页面。'
                ],
                topics: [
                    "<strong>概率机器学习与贝叶斯分析：</strong>变分推断、层次模型、矩阵分解和不确定性感知建模。",
                    "<strong>生成模型：</strong>扩散模型、自回归模型及其在下游任务中的高效适配。",
                    "<strong>多模态表征学习：</strong>视觉语言模型、多模态大模型和领域对齐。"
                ]
            }
        },
        "publications.shtml.html": {
            en: {
                h1: "Publications",
                note: '(Full list on <a href="https://scholar.google.com/citations?hl=en&user=i7tj4z0AAAAJ" target="_blank" rel="noopener">Google Scholar</a>. * indicates equal contribution, and # indicates corresponding author.)'
            },
            zh: {
                h1: "发表论文",
                note: '完整列表见 <a href="https://scholar.google.com/citations?hl=en&user=i7tj4z0AAAAJ" target="_blank" rel="noopener">Google Scholar</a>。* 表示共同一作，# 表示通讯作者。'
            }
        },
        "teaching.shtml.html": {
            en: {
                headings: ["Courses", "2026 Spring", "2025 Fall"],
                courses: [
                    '<a href="https://lms.szu.edu.cn/course/15956/index" target="_blank" rel="noopener">Operating Systems 01</a>, Zhili Building L1 511.',
                    '<a href="https://lms.szu.edu.cn/course/15957/index#/" target="_blank" rel="noopener">Operating Systems 02</a>, Zhili Building L1 511.',
                    '<a href="https://lms.szu.edu.cn/course/7831/index#/" target="_blank" rel="noopener">Operating Systems</a>, Zhili Building L1 711.',
                    '<a href="https://lms.szu.edu.cn/course/11373/index#/" target="_blank" rel="noopener">Algorithm Design and Analysis</a>, Zhili Building L1 504.'
                ]
            },
            zh: {
                headings: ["教学", "2026 春季", "2025 秋季"],
                courses: [
                    '<a href="https://lms.szu.edu.cn/course/15956/index" target="_blank" rel="noopener">操作系统 01</a>，至理楼 L1 511。',
                    '<a href="https://lms.szu.edu.cn/course/15957/index#/" target="_blank" rel="noopener">操作系统 02</a>，至理楼 L1 511。',
                    '<a href="https://lms.szu.edu.cn/course/7831/index#/" target="_blank" rel="noopener">操作系统</a>，至理楼 L1 711。',
                    '<a href="https://lms.szu.edu.cn/course/11373/index#/" target="_blank" rel="noopener">算法设计与分析</a>，至理楼 L1 504。'
                ]
            }
        },
        "people.shtml.html": {
            en: {
                headings: ["Prospective Students", "Current Students"],
                prospective: [
                    "<strong>We are actively looking for motivated undergraduate and Master students</strong> who are excited about embodied AI, multimodal foundation models, Bayesian machine learning, and related areas. If you enjoy asking bold questions and building real systems, please feel free to send me your CV.",
                    '<strong>Students will have opportunities to work on frontier research problems</strong> with the goal of publishing at top AI/ML/CV conferences. Please refer to <a href="research.shtml.html">Research</a> and <a href="publications.shtml.html">Publications</a> for our recent work.'
                ],
                studentMeta: [
                    ["Master Student, 2024", "Interpretability of Multimodal Large Language Models"],
                    ["Master Student, 2025", "2D/3D Anomaly Detection"],
                    ["Undergraduate, Junior", "Multimodal/3D Understanding & VQA"],
                    ["Undergraduate, Sophomore", "Embodied AI & VLA"]
                ],
                achievements: [
                    ["CVPR 2026 * 1"],
                    ["ICIGP * 1"],
                    ["ICASSP 2026 * 1", "ICML 2026 * 1"],
                    ["Challenge Cup", "National Second Prize"]
                ]
            },
            zh: {
                headings: ["招生信息", "当前学生"],
                prospective: [
                    "<strong>我们正在招收有热情的本科生和硕士生</strong>，方向包括具身智能、多模态基础模型、贝叶斯机器学习及相关领域。如果你喜欢提出大胆问题，也愿意动手构建真实系统，欢迎发送简历联系我。",
                    '<strong>学生将有机会参与前沿研究问题</strong>，目标是在 AI/ML/CV 顶级会议发表论文。近期工作可参考<a href="research.shtml.html">研究方向</a>和<a href="publications.shtml.html">发表论文</a>。'
                ],
                studentMeta: [
                    ["2024级硕士研究生", "多模态大模型可解释性"],
                    ["2025级硕士研究生", "2D/3D 异常检测"],
                    ["本科三年级", "多模态/3D 理解与视觉问答"],
                    ["本科二年级", "具身智能与 VLA"]
                ],
                achievements: [
                    ["CVPR 2026 * 1"],
                    ["ICIGP * 1"],
                    ["ICASSP 2026 * 1", "ICML 2026 * 1"],
                    ["挑战杯", "全国二等奖"]
                ]
            }
        },
        "professional.shtml.html": {
            en: {
                h1: "Professional Activities",
                html: '<li>Conference reviewers<ul><li>Conference on Neural Information Processing Systems (NeurIPS)</li><li>International Conference on Learning Representations (ICLR)</li><li>International Conference on Machine Learning (ICML)</li><li>Conference on Computer Vision and Pattern Recognition (CVPR)</li><li>International Conference on Computer Vision (ICCV)</li><li>European Conference on Computer Vision (ECCV)</li></ul></li><li>journal reviewers<ul><li>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</li><li>International Journal of Computer Vision (IJCV) </li><li>IEEE Transactions on Neural Networks and Learning Systems (TNNLS)</li><li>IEEE Transactions on Knowledge and Data Engineering (TKDE)</li></ul></li>'
            },
            zh: {
                h1: "学术服务",
                html: '<li>会议审稿人<ul><li>Conference on Neural Information Processing Systems (NeurIPS)</li><li>International Conference on Learning Representations (ICLR)</li><li>International Conference on Machine Learning (ICML)</li><li>Conference on Computer Vision and Pattern Recognition (CVPR)</li><li>International Conference on Computer Vision (ICCV)</li><li>European Conference on Computer Vision (ECCV)</li></ul></li><li>期刊审稿人<ul><li>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</li><li>International Journal of Computer Vision (IJCV)</li><li>IEEE Transactions on Neural Networks and Learning Systems (TNNLS)</li><li>IEEE Transactions on Knowledge and Data Engineering (TKDE)</li></ul></li>'
            }
        },
        "contact.shtml.html": {
            en: {
                h1: "Contact Information",
                labels: ["Office", "Email", "Address"],
                values: [
                    "Room L6-711, Zhizhen Building",
                    "dongshengwang@szu[dot]edu[dot]cn, wds_dana[at]163[dot]com",
                    "College of Computer Science and Software Engineering, Canghai Campus of Shenzhen University, Nanshan District, Shenzhen, Guangdong, 518060 China"
                ]
            },
            zh: {
                h1: "联系方式",
                labels: ["办公室", "邮箱", "地址"],
                values: [
                    "至真楼 L6-711",
                    "dongshengwang@szu[dot]edu[dot]cn, wds_dana[at]163[dot]com",
                    "广东省深圳市南山区深圳大学沧海校区计算机与软件学院，邮编 518060"
                ]
            }
        }
    };

    function pageName() {
        const name = window.location.pathname.split("/").pop();
        return name || "index.shtml.html";
    }

    function setHTMLList(nodes, values) {
        nodes.forEach((node, index) => {
            if (values[index] !== undefined) node.innerHTML = values[index];
        });
    }

    function setTextList(nodes, values) {
        nodes.forEach((node, index) => {
            if (values[index] !== undefined) node.textContent = values[index];
        });
    }

    function applyCommon(lang) {
        const data = common[lang];
        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

        const title = document.querySelector("nav .title a");
        if (title) title.textContent = data.title;

        document.querySelectorAll("nav .menu a").forEach((link) => {
            const href = link.getAttribute("href");
            if (data.nav[href]) link.textContent = data.nav[href];
        });

        const foot = document.querySelector(".foot");
        if (foot) foot.innerHTML = data.footer;

        document.querySelectorAll(".language-switch button").forEach((button) => {
            button.classList.toggle("active", button.dataset.langOption === lang);
            button.setAttribute("aria-pressed", button.dataset.langOption === lang ? "true" : "false");
        });
    }

    function applyIndex(lang, data) {
        setTextList(document.querySelectorAll(".content h1.articletitle"), data.headings);
        setHTMLList(document.querySelectorAll(".content section:first-of-type > p.articlesubtitle"), data.about);
        setHTMLList(document.querySelectorAll(".topic-list > li"), data.topics);
        setHTMLList(document.querySelectorAll(".notice-list > li"), data.positions);
        setTextList(document.querySelectorAll(".content section:nth-of-type(3) ul > li"), data.news);
    }

    function applyResearch(data) {
        setTextList(document.querySelectorAll(".content h1.articletitle"), data.headings);
        const paragraphs = document.querySelectorAll(".content p.articlesubtitle");
        if (paragraphs[0]) paragraphs[0].innerHTML = data.paragraphs[0];
        if (paragraphs[1]) paragraphs[1].innerHTML = data.paragraphs[1];
        setHTMLList(document.querySelectorAll(".topic-list > li"), data.topics);
    }

    function applyPublications(lang, data) {
        const h1 = document.querySelector(".content h1.articletitle");
        if (h1) h1.textContent = data.h1;
        const note = document.querySelector(".content > section > p.articlesubtitle");
        if (note) note.innerHTML = data.note;
        document.querySelectorAll(".publication-details a").forEach((link) => {
            if (link.textContent.trim() === "Paper" || link.textContent.trim() === "论文") {
                link.textContent = lang === "zh" ? "论文" : "Paper";
            }
            if (link.textContent.trim() === "Code" || link.textContent.trim() === "代码") {
                link.textContent = lang === "zh" ? "代码" : "Code";
            }
            if (link.textContent.trim() === "Spotlight" || link.textContent.trim() === "亮点论文") {
                link.textContent = lang === "zh" ? "亮点论文" : "Spotlight";
            }
        });
    }

    function applyTeaching(data) {
        setTextList(document.querySelectorAll(".content h1.articletitle, .content h2.articletitle"), data.headings);
        setHTMLList(document.querySelectorAll(".content li"), data.courses);
    }

    function applyPeople(data) {
        setTextList(document.querySelectorAll(".content h1.articletitle"), data.headings);
        setHTMLList(document.querySelectorAll(".notice-list > li"), data.prospective);
        document.querySelectorAll(".student-card").forEach((card, index) => {
            const paragraphs = card.querySelectorAll("p");
            const meta = data.studentMeta[index] || [];
            if (paragraphs[0] && meta[0]) paragraphs[0].textContent = meta[0];
            if (paragraphs[1] && meta[1]) paragraphs[1].textContent = meta[1];
            const achievements = card.querySelector(".student-achievements");
            if (achievements && data.achievements[index]) {
                achievements.innerHTML = data.achievements[index].map((item) => `<span>${item}</span>`).join("");
            }
        });
    }

    function applyProfessional(data) {
        const h1 = document.querySelector(".content h1.articletitle");
        if (h1) h1.textContent = data.h1;
        const list = document.querySelector(".content ul.articlesubtitle");
        if (list) list.innerHTML = data.html;
    }

    function applyContact(data) {
        const h1 = document.querySelector(".content h1.articletitle");
        if (h1) h1.textContent = data.h1;
        setTextList(document.querySelectorAll(".contact-list dt"), data.labels);
        setTextList(document.querySelectorAll(".contact-list dd"), data.values);
    }

    function applyPage(lang) {
        const name = pageName() === "index.html" ? "index.shtml.html" : pageName();
        const page = pages[name];
        if (!page) return;

        const data = page[lang];
        if (name === "index.shtml.html") applyIndex(lang, data);
        if (name === "research.shtml.html") applyResearch(data);
        if (name === "publications.shtml.html") applyPublications(lang, data);
        if (name === "teaching.shtml.html") applyTeaching(data);
        if (name === "people.shtml.html") applyPeople(data);
        if (name === "professional.shtml.html") applyProfessional(data);
        if (name === "contact.shtml.html") applyContact(data);
    }

    function setLanguage(lang) {
        const nextLang = lang === "zh" ? "zh" : "en";
        window.localStorage.setItem(STORAGE_KEY, nextLang);
        applyCommon(nextLang);
        applyPage(nextLang);
    }

    function createSwitch() {
        const header = document.querySelector("header");
        if (!header || document.querySelector(".language-switch")) return;

        const switcher = document.createElement("div");
        switcher.className = "language-switch";
        switcher.setAttribute("aria-label", "Language switch");
        switcher.innerHTML = '<button type="button" data-lang-option="en">EN</button><span>/</span><button type="button" data-lang-option="zh">中文</button>';
        header.appendChild(switcher);

        switcher.querySelectorAll("button").forEach((button) => {
            button.addEventListener("click", () => setLanguage(button.dataset.langOption));
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        createSwitch();
        setLanguage(window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
    });
})();
