import Card from "./components/Card";

const App = () => {
  const employees = [
    {
      status: "Available",
      pay: "$45/hr",
      name: "Aarav Mehta",
      post: "Frontend Developer",
      skill1: "HTML",
      skill2: "CSS",
      skill3: "JavaScript",
      skill4: "+3",
      organization: "Freelancing",
      intro:
        "Frontend developer with strong UI skills and responsive design experience.",
      icon: "mdiAccountOutline",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      status: "Employed",
      pay: "$85/hr",
      name: "Riya Sharma",
      post: "Full Stack Developer",
      skill1: "Node.js",
      skill2: "React",
      skill3: "PostgreSQL",
      skill4: "+5",
      organization: "Google",
      intro: "Full stack engineer experienced in scalable web applications.",
      icon: "mdiDomain",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      status: "Available",
      pay: "$60/hr",
      name: "Karan Verma",
      post: "Backend Developer",
      skill1: "Java",
      skill2: "Spring Boot",
      skill3: "MySQL",
      skill4: "+4",
      organization: "Freelancing",
      intro: "Backend developer focused on performance and secure APIs.",
      icon: "mdiAccountOutline",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      status: "Employed",
      pay: "$120/hr",
      name: "Sneha Iyer",
      post: "Cloud Engineer",
      skill1: "AWS",
      skill2: "Docker",
      skill3: "Kubernetes",
      skill4: "+6",
      organization: "Amazon",
      intro:
        "Cloud engineer specializing in scalable and reliable cloud systems.",
      icon: "mdiDomain",
      img: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
      status: "Available",
      pay: "$50/hr",
      name: "Rohit Kulkarni",
      post: "UI/UX Designer",
      skill1: "Figma",
      skill2: "Adobe XD",
      skill3: "Wireframing",
      skill4: "+3",
      organization: "Freelancing",
      intro: "UI/UX designer creating clean and user-friendly interfaces.",
      icon: "mdiAccountOutline",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      status: "Employed",
      pay: "$150/hr",
      name: "Ananya Patel",
      post: "AI/ML Engineer",
      skill1: "Python",
      skill2: "TensorFlow",
      skill3: "ML",
      skill4: "+7",
      organization: "Microsoft",
      intro:
        "AI engineer working on intelligent systems and data-driven models.",
      icon: "mdiDomain",
      img: "https://randomuser.me/api/portraits/women/61.jpg",
    },
    {
      status: "Available",
      pay: "$40/hr",
      name: "Vikram Singh",
      post: "QA Automation Engineer",
      skill1: "Selenium",
      skill2: "Python",
      skill3: "JIRA",
      skill4: "+4",
      organization: "Freelancing",
      intro: "QA engineer ensuring product quality through automated testing.",
      icon: "mdiAccountOutline",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
      status: "Employed",
      pay: "$95/hr",
      name: "Neha Joshi",
      post: "Mobile App Developer",
      skill1: "Flutter",
      skill2: "Dart",
      skill3: "Firebase",
      skill4: "+5",
      organization: "Apple",
      intro: "Mobile app developer building high-performance apps.",
      icon: "mdiDomain",
      img: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    {
      status: "Available",
      pay: "$55/hr",
      name: "Arjun Rao",
      post: "DevOps Engineer",
      skill1: "CI/CD",
      skill2: "Jenkins",
      skill3: "Linux",
      skill4: "+4",
      organization: "Freelancing",
      intro: "DevOps engineer automating deployment and infrastructure.",
      icon: "mdiAccountOutline",
      img: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    {
      status: "Employed",
      pay: "$110/hr",
      name: "Pooja Malhotra",
      post: "Product Manager",
      skill1: "Negotiation",
      skill2: "Agile",
      skill3: "Management",
      skill4: "+6",
      organization: "Netflix",
      intro: "Product manager driving user-focused decisions.",
      icon: "mdiDomain",
      img: "https://wallpapers.com/picture/professional-profile-pictures-1427-x-1920-txfewtw6mcg0y6hk.html",
    },
  ];

  return (
    <div className="parent">
      {employees.map(function (ele, idx) {
        return (
          <div key={idx}>
            <Card
              status={ele.status}
              pay={ele.pay}
              name={ele.name}
              post={ele.post}
              skill1={ele.skill1}
              skill2={ele.skill2}
              skill3={ele.skill3}
              skill4={ele.skill4}
              organization={ele.organization}
              intro={ele.intro}
              icon={ele.icon}
              img={ele.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
