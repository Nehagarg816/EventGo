const sample = [
    {
        title: "GDSC Orientation",
        description:
            "Orientation for freshers to introduce them with GDSC IGDTUW Chapter",
        date: "2024-08-15",
        location: "IGDTUW",
        category: "Orientation",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoAnKnMz6A4NxKJTG2FLYIpNt997p5Qaa9Q&s",
        organisedBy: "GDSC IGDTUW Chapter",
    },
    {
        title: "Smart India Hackathon",
        description:
            "Session on how to perform efficiently in Smart India Hackathon",
        date: "2024-08-20",
        location: "IGDTUW",
        category: "Orientation",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnfjLQOUtCYXaGATAvyU007E1YpaK-CZTIQ&s",
        organisedBy: "AI Club IGDTUW",
    },
    {
        title: "AI & Machine Learning Summit 2024",
        description:
            "A summit focused on the latest advancements in AI and Machine Learning, featuring keynote speakers from leading tech companies.",
        date: new Date("2024-09-10T09:00:00"),
        location: "Bengaluru, Karnataka, India",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        organisedBy: "PES University",
    },
    {
        title: "Blockchain India Week 2024",
        description:
            "An immersive week-long event exploring the impact of blockchain technology across various industries in India.",
        date: new Date("2024-10-20T10:00:00"),
        location: "Mumbai, Maharashtra, India",
        category: "Forum",
        image: "https://images.unsplash.com/photo-1639710342143-f87416f1a913?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        organisedBy: "IIT Bombay",
    },
    {
        title: "Startup Tech Expo 2024",
        description:
            "An exhibition showcasing the most innovative tech startups in India, featuring product demos, networking, and investment opportunities.",
        date: new Date("2024-11-15T11:00:00"),
        location: "Hyderabad, Telangana, India",
        category: "Orientation",
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        organisedBy: "IIIT Hyderabad",
    },
    {
        title: "Data Science & Analytics Conference 2024",
        description:
            "A conference dedicated to data science and analytics, with sessions on big data, predictive analytics, and data-driven decision making.",
        date: new Date("2024-12-05T09:30:00"),
        location: "New Delhi, India",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        organisedBy: "Delhi University",
    },
    {
        title: "Cybersecurity India Forum 2024",
        description:
            "A forum discussing the latest trends and challenges in cybersecurity, focusing on protecting digital infrastructure in India.",
        date: new Date("2024-08-25T10:00:00"),
        location: "Delhi, India",
        category: "Forum",
        image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        organisedBy: "IIT Delhi",
    },
    {
        title: "Future of Robotics Expo",
        description:
            "An expo showcasing cutting-edge robotics technology and its applications across different sectors.",
        date: new Date("2024-10-05T09:00:00"),
        location: "Chennai, Tamil Nadu, India",
        category: "Expo",
        image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D",
        organisedBy: "Robotics Association of India",
    },
    {
        title: "Digital Marketing Trends 2024",
        description:
            "A conference focused on emerging trends and strategies in digital marketing for the upcoming year.",
        date: new Date("2024-11-01T10:00:00"),
        location: "Bengaluru, Karnataka, India",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        organisedBy: "Digital Marketing Institute",
    },
    {
        title: "Cloud Computing Summit",
        description:
            "An event dedicated to cloud computing advancements and best practices, featuring industry leaders and case studies.",
        date: new Date("2024-12-10T09:00:00"),
        location: "Hyderabad, Telangana, India",
        category: "Summit",
        image: "https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
        organisedBy: "CloudTech Solutions",
    },
    {
        title: "Innovative Startups Showcase",
        description:
            "A showcase of the most promising startups and their innovative solutions across various industries.",
        date: new Date("2024-11-20T11:00:00"),
        location: "Mumbai, Maharashtra, India",
        category: "Showcase",
        image: "https://images.unsplash.com/photo-1681949222860-9cb3b0329878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhcnR1cHN8ZW58MHx8MHx8fDA%3D",
        organisedBy: "Startup India",
    },
];
module.exports = { data: sample };
