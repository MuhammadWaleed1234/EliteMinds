import ProfilePage from "@/components/profile-page"

const profiles = {
  "muhammad-waleed": {
    id: "muhammad-waleed",
    name: "Muhammad Waleed",
    title: "Strategic Problem Solver & Future Founder",
    bio: "Muhammad is the go-to person when things get messy or when you need something done efficiently. He finds the easiest ways to fulfill requirements without useless effort. He won the prestigious Folio3 Internship program for having the best product idea and its end-to-end implementation. He has worked internationally with brilliant minds from Stanford, MIT, Berkeley, FAST, IIT, and Cambridge, collaborating with people from Pakistan, India, US, Australia, and Germany while working at E3Group. Muhammad is destined to be a future founder of his own startup.",
    achievements: [
      "Won Folio3 Internship program for best product idea and implementation",
      "Worked internationally with top universities (Stanford, MIT, Berkeley, Cambridge, IIT)",
      "Collaborated across multiple regions and cultures",
      "E3Group international experience",
      "Strategic problem-solving expertise",
    ],
    skills: [
      "Problem Solving",
      "Product Development",
      "International Collaboration",
      "Entrepreneurship",
      "Strategic Planning",
      "Project Management",
    ],
    image: "/professional-man-entrepreneur-confident.jpg",
    color: "from-purple-500 to-pink-500",
  },
  "armeen-fatima": {
    id: "armeen-fatima",
    name: "Armeen Fatima",
    title: "Business Excellence Leader",
    bio: "Armeen is a strong, independent woman who knows perfection and can push herself to achieve it. She is the person you need as a CEO of your company - someone who can present your work flawlessly and get what she needs. Her professional journey includes her first internship at Nestle, a multinational company, and her second internship at Devsinc, one of the top software houses of Pakistan. Her combination of corporate experience and tech expertise makes her invaluable.",
    achievements: [
      "Internship at Nestle - multinational corporation",
      "Internship at Devsinc - top Pakistani software house",
      "Executive presentation skills",
      "Business development expertise",
      "Corporate and tech industry experience",
    ],
    skills: [
      "Business Development",
      "Executive Presentation",
      "Corporate Strategy",
      "Leadership",
      "Negotiation",
      "Project Management",
    ],
    image: "/professional-woman-business-leader.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  "arooba-iqbal": {
    id: "arooba-iqbal",
    name: "Arooba Iqbal",
    title: "AI/ML Specialist",
    bio: "Arooba is the kind of person who knows when to lock in and when effort is unnecessary. She understands how to take care of herself and can provide the best, bold, and straightforward feedback when you need it most. She got her first internship at Devsinc in AI/ML and absolutely killed it. Her technical expertise combined with her practical wisdom makes her an invaluable team member.",
    achievements: [
      "AI/ML internship at Devsinc",
      "Exceptional performance in machine learning projects",
      "Strong technical foundation",
      "Practical problem-solving approach",
      "Valuable feedback and mentorship skills",
    ],
    skills: ["Machine Learning", "AI Development", "Python", "Data Analysis", "Deep Learning", "Technical Mentorship"],
    image: "/professional-woman-tech-ai.jpg",
    color: "from-green-500 to-emerald-500",
  },
  "muiz-ul-islam": {
    id: "muiz-ul-islam",
    name: "Muiz ul Islam Khan",
    title: "Peak Animator & Creative Director",
    bio: "Muiz is Pakistan's peak artist and arguably the best animator in the entire country. He can get a manga animated while attending Data Structures and Algorithms lectures at university - that's the level of his talent and dedication. He is the most caring person and has built a pretty great network of clients, so he never needed internships. Instead, he mentors and supports new animators. He is destined to be the leader of his own animation studio.",
    achievements: [
      "Recognized as Pakistan's best animator",
      "Exceptional multitasking and time management",
      "Strong client network and relationships",
      "Mentorship and support for emerging animators",
      "Future animation studio leader",
    ],
    skills: ["Animation", "3D Modeling", "Character Design", "Motion Graphics", "Creative Direction", "Mentorship"],
    image: "/professional-man-creative-animator.jpg",
    color: "from-orange-500 to-red-500",
  },
  "amaz-ahmed": {
    id: "amaz-ahmed",
    name: "Amaz Ahmed",
    title: "Full-Stack Developer & International Expert",
    bio: "Amaz is our gym boi and a good coder - beauty with brains. He has worked with US clients and is a pretty mysterious person to be honest. He got his first internship at Analyzinn Solutions in MERN stack and his second one at a software house that got international clients. He is a pretty great guy and a chill bro who brings both technical excellence and a relaxed, collaborative attitude to every project.",
    achievements: [
      "MERN stack expertise from Analyzinn Solutions",
      "International client experience",
      "US-based client work",
      "Full-stack development proficiency",
      "Collaborative team player",
    ],
    skills: ["MERN Stack", "React", "Node.js", "MongoDB", "Full-Stack Development", "International Collaboration"],
    image: "/professional-man-developer-fit.jpg",
    color: "from-indigo-500 to-purple-500",
  },
}

export default function ProfileRoute({ params }: { params: { id: string } }) {
  const member = profiles[params.id as keyof typeof profiles]

  if (!member) {
    return <div>Profile not found</div>
  }

  return <ProfilePage member={member} />
}
