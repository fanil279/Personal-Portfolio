document.addEventListener("DOMContentLoaded", (e) => {
    // Client-side form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault()

            const firstName = document.getElementsByName("firstname")[0].value.trim()
            const lastName = document.getElementsByName("lastname")[0].value.trim()
            const email = document.getElementsByName("email")[0].value.trim()

            const nameCheck = /^[A-Za-z]+$/
            const nameCheckRus = /^[А-Яа-яЁё]+$/
            const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

            const spanFn = document.getElementById("fn")
            const spanLn = document.getElementById("ln")
            const spanEmail = document.getElementById("e-mail")

            spanFn.textContent = "";
            spanLn.textContent = "";
            spanEmail.textContent = ""

            if (firstName === "") {
                spanFn.textContent = "First name cannot be empty!"
                return
            } else if (!firstName.match(nameCheck) && !firstName.match(nameCheckRus)) {
                spanFn.textContent = "First name can only contain alphabetical letters!"
                return
            }

            if (lastName === "") {
                spanLn.textContent = "Last name cannot be empty!"
                return
            } else if (!lastName.match(nameCheck) && !lastName.match(nameCheckRus)) {
                spanLn.textContent = "Last name can only contain alphabetical letters!"
                return
            }

            if (email === "") {
                spanEmail.textContent = "Email cannot be empty!"
                return
            } else if (!email.match(emailCheck)) {
                spanEmail.textContent = "Please, enter a valid email!"
                return
            }

            window.alert("Form submitted successfully!")
            form.submit()
        })
    }


    // CV download functionality logic
    const btnCv = document.getElementById("download-cv-btn")
    const btnLink = document.getElementById("cv-link")

    btnCv.addEventListener(("click"), (e) => {
    btnLink.click()
    })


    // English, Russian language switcher
    const langData = {
        ru: {
            home: "ГЛАВНАЯ",
            aboutMe: "ОБО МНЕ",
            mySkills: "МОИ НАВЫКИ",
            projects: "ПРОЕКТЫ",
            contact: "СВЯЗАТЬСЯ",
            whoAmI: "Кто я",
            aboutDescription: "Привет, я Фаниль Рамакаев, студент второго курса Вестминстерского Университета и начинающий фуллстак-разработчик, увлеченный созданием чистых, адаптивных и удобных для пользователя веб-сайтов. У меня есть прочные знания в HTML, CSS и JavaScript, и сейчас я углубляюсь в React, чтобы расширить свои навыки во фронтенде. Кроме того, у меня есть базовые знания UI/UX-дизайна. Стремясь стать полноценным full-stack разработчиком, я активно изучаю серверные технологии, такие как Node.js, Express.js и ASP.NET Core C#.",
            mySkillsHeader: "Мои навыки",
            whatCanIDo: "Что я умею?",
            branding: "Брендинг",
            graphicDesign: "Графический дизайн",
            cleanCode: "Чистый код",
            userInterface: "Пользовательский интерфейс",
            userExperience: "Пользовательский опыт",
            fastSupport: "Быстрая поддержка",
            homeFooter: "Главная",
            aboutMeFooter: "Обо мне",
            aboutMeHeader: "",
            mySkillsFooter: "Мои навыки",
            projectsFooter: "Проекты",
            contactFooter: "Связаться",
            firstName: "Имя",
            lastName: "Фамилия",
            email: "Адрес электронной почты",
            message: "Сообщение",
            submit: "Отправить",
            personalPortfolio: "Личное портфолио",
            description: "- Преданный своему делу младший full-stack веб-разработчик, вдохновленный миром технологий и его безграничными возможностями.",
            fanilRamakaev: "Фаниль Рамакаев",
            brandingDescription: "Создание последовательного и согласованного бренда с помощью логотипов, цветовых схем, типографики и других элементов брендинга.",
            creativeDesignDescription: "Использование художественных элементов и эстетических принципов для создания визуально привлекательных и увлекательных опытов.",
            cleanCodeDescription: "Написание кода, который хорошо структурирован, надежен и поддерживаем. Это включает в себя соблюдение лучших практик кодирования.",
            userInterfaceDescription: "Создание понятных и удобных дизайнов, с приоритетом удобству использования, доступности и беспрепятственному пользовательскому опыту.",
            userExperienceDescription: "Понимание поведения, потребностей и предпочтений пользователей для создания интерфейсов, которые интуитивно понятны, эффективны и приятны в использовании.",
            fastSupportDescription: "Решение проблем и запросов пользователей, связанных с веб-сайтом или приложением.",
            selectProject: "Выберите проект для просмотра!",
            myProjects: "Мои проекты",
            comingSoon: "Новый проект скоро...",
            downloadCV: "Скачать мое резюме",
            contactMe: "Связаться со мной",
            emailLabel: "Адрес электронной почты",
            messageLabel: "Сообщение",
            submitButton: "Отправить",
            firstName: "Имя",
            lastName: "Фамилия",
            email: "на-пример@gmail.com",
            message: "Сообщение"
        }
    }    
    
    function changeLang(lang) {
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n")
            if (langData[lang][key]) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.setAttribute("placeholder", langData[lang][key])
                } else {
                    element.textContent = langData[lang][key]
                }
            }
        })
    }

    document.getElementById("en").addEventListener("click", (e) => {
        document.getElementById("en").classList.add("activeText")
        document.getElementById("rus").classList.remove("activeText")
        location.reload()
    })

    document.getElementById("rus").addEventListener("click", (e) => {
        changeLang("ru")
        document.getElementById("rus").classList.add("activeText")
        document.getElementById("en").classList.remove("activeText")
    })

    const loader = document.getElementById("preloader")
    window.addEventListener("load", function() {
        loader.style.display = "none"
    })


    // Light, Dark mode toggle
    const label = document.getElementById("label")
    label.addEventListener("click", () => {
        const themeToggle = document.getElementById("theme-toggle")
        const body = document.body
        const boxes = document.getElementsByClassName("box")

        // Check for saved theme in localStorage
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode")
            themeToggle.checked = true
        }

        themeToggle.addEventListener("change", function() {
            if (this.checked) {
                body.classList.add("dark-mode")

                for (const box of boxes) {
                    box.classList.add("boxDark")
                }

                localStorage.setItem("dark-mode", "enabled")
            } else {
                body.classList.remove("dark-mode")
                
                for (const box of boxes) {
                    box.classList.remove("boxDark")
                }

                localStorage.setItem("dark-mode", "disabled")
            }
        })
    })


    const btnUp = document.getElementById("up")
    btnUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
    
    const btnDown = document.getElementById("down")
    btnDown.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        })
    })
})