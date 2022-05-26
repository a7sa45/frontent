const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://a7sa45.github.io',
  title: 'عبدالهادي.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'عبدالهادي',
  role: 'مطور ويب',
  description:
    'طالب علوم حاسب بجامعة الملك خالد , مطور ويب منذ اكثر من خمس سنوات',
  resume: 'https://example.com',
  social: {
    twitter: 'https://twitter.com/a7sa45',
    linkedin: 'https://www.linkedin.com/in/abdulhadi-al-bo-sninah-576582205/',
    github: 'https://github.com/a7sa45',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'الاختصارات',
    description:
      'موقع اختصارات الايفون , يسهل على المستخدمين انشاء حسابات ونشر اختصاراتهم والتفاعل مع الاختصارات الاخرى',
    stack: ['Laravel', 'Bootstrap', 'Alpine js'],
    sourceCode: 'https://github.com/a7sa45/shortcuts',
    livePreview: 'https://github.com/a7sa45/shortcuts',
  },
  {
    name: 'تويتر',
    description:
      'موقع مشابه لموقع تويتر , حيث حاكيت فيه فكره الموقع بشكل مبسط',
    stack: ['Ruby', 'Rails', 'Bootstrap'],
    sourceCode: 'https://github.com/a7sa45/twitter_clone_rails',
    livePreview: 'https://github.com/a7sa45/twitter_clone_rails',
  },
  {
    name: 'مدونه',
    description:
      'مدونه بسيطه , يمكن للمستخدم انشاء منشور وتعديله وحذفه بشكل مبسط',
    stack: ['Ruby', 'Rails', 'Bootstrap'],
    sourceCode: 'https://github.com/a7sa45/blogger',
    livePreview: 'https://github.com/a7sa45/blogger',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'React',
  'Next js',
  'Tailwind CSS',
  'php',
  'laravel',
  'Python',
  'Django',
  'Ruby',
  'Rails',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abod72001@mail.com',
}

export { header, about, projects, skills, contact }
