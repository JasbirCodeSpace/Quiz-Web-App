
const questions = [
    {
      id: 1,
      question: "How is COVID-19 passed on?",
      answer: [1],
      explaination: "When a person with COVID-19 coughs, breathes out or sneezes, droplets come out from their nose and mouth which can contain the virus. These can be breathed in by people who are nearby or land on surfaces which other people can then touch. Regularly washing your hands and keeping your distance from others is the best way to prevent COVID-19. ",
      options: [
        "Through droplets that come from your mouth and nose when you cough or breathe out",
        "In sexual fluids, including semen, vaginal fluids or anal mucous",
        "By drinking unclean water",
        "All of the above"
      ]
    },
    {
      id: 2,
      question: "What are the common symptoms of COVID-19?",
      answer: [4],
      explaination: "COVID-19 is usually marked by a new and continuous cough, but some people get other symptoms too including tiredness, a fever and flu-like symptoms including headaches, runny nose and a sore throat. If you’re finding it hard to breathe or your symptoms don’t improve after 7 days, call your local health service straight away. ",
      options: [
        "A new and continuous cough",
        "Fever",
        "Tiredness",
        "All of the above"
      ]
    },
    {
      id: 3,
      question: "Can you always tell if someone has COVID-19?",
      answer: [1],
      explaination: "The virus can be in someone’s body for up to 14 days before they get symptoms, and some people will have such a mild case of COVID-19 that they might not notice anything is wrong. That’s why it’s important that everyone follows their government’s advice even if they feel healthy.",
      options: [
        "No – not everyone with COVID-19 has symptoms",
        "Yes – it will be obvious, a person with COVID-19 coughs a lot",
        "Yes – you can tell just by where a person comes from, their race and ethnicity"
      ]
    },
    {
      id: 4,
      question: "Can washing your hands protect you from COVID-19?",
      answer: [2],
      explaination: "Washing your hands regularly is one of the best way to avoid getting or passing on COVID-19. It’s important to keep washing your hands throughout the day especially before and after going out. To wash your hands properly you need to get every spot. Make sure you wash them for at least 40 seconds if you are using soap and water, and for at least 20 seconds if you’re using hand sanitizer. ",
      options: [
        "Yes – but only if you use a strong bleach",
        "Yes – normal soap and water or hand sanitizer is enough",
        "No – Washing your hands doesn’t stop COVID-19"
      ]
    },
    {
      id: 5,
      question: "Which of the following people is COVID-19 more dangerous for?",
      answer: [2,3],
      explaination: "Most people’s immune systems will be able to fight the virus and so COVID-19 won't make them seriously ill, however it can be more dangerous for older people and people with existing health problems - including lung problems, heart problems, diabetes and others. People with a reduced immune system can also be more at risk, this includes people having chemotherapy for cancer or those with untreated HIV.\n\nCOVID-19 is normally not very serious in children and doesn’t affect people differently depending on where they live in the world or their race.",
      options: [
        "Children",
        "Older people – especially those aged 70 and above",
        "People with certain underlying health conditions",
        "European people"
      ]
    },
    {
      id: 6,
      question: "Are people living with HIV always more at risk?",
      answer: [2],
      explaination: "There’s no evidence that people living with HIV who are adhering to effective antiretroviral treatment (ART), have high CD4 counts and are otherwise well, are more likely to get COVID-19. There’s also no evidence that these people are more likely to become seriously ill if they do get the COVID-19.The people who need to be more careful are those with a low CD4 count (<200 copies/cell), a high viral load, or those who have had a recent opportunistic infection. If this applies to you speak to your health care worker for more advice.",
      options: [
        "Yes – people with HIV have weaker immune systems",
        "No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk",
      ]
    },
    {
      id: 7,
      question: "When should fabric face masks be worn?",
      answer: [4],
      explaination: "The World Health Organisation now recommends using face masks when you are not able to stay at least 1 meter away from others. This includes when you’re on public transport, inside shops, or any other time when you’re in a confined or crowded space.\n\nThis is because we now have evidence that some people who get COVID-19 don’t get any symptoms but can still pass the virus on. Wearing fabric masks prevent these asymptomatic and seemingly healthy people from passing on the virus in public spaces. If you do have symptoms for COVID-19, you still need to stay home and self-isolate - wearing a mask is not enough.",
      options: [
        "On public transport",
        "In confined or crowded spaces",
        "In small shops",
        "All of the above"
      ]
    },
    {
      id: 8,
      question: "Can COVID-19 be cured? ",
      answer: [3],
      explaination: "Most people who get COVID-19 will recover by themselves, normally within 14 days. Some people who get more seriously ill with COVID-19 may need hospital care to help them breathe. For a small percentage of people COVID-19 can be fatal. If your symptoms don’t get better after 7 days, you are finding it hard to cope, or if at any point you have difficulty breathing you should call your local health service straight away.",
      options: [
        "Yes – Hot drinks can cure COVID-19",
        "No – COVID-19 is a death sentence",
        "No – but most people get better by themselves",
      ]
    },
    {
      id: 9,
      question: "Which of the following is an example of physical distancing? ",
      answer: [1],
      explaination: "To slow down the spread of COVID-19 people are being asked to reduce the amount of time that they spend with other people and the number of people they meet in a day. The exact advice on how to do this will vary depending on where in the world you live. In some places, people have been asked to stop shaking hands and avoid large gatherings. Other places are telling people to stay at home completely and only leave the house to exercise, shop for essentials and go to work (if you can’t work at home).\n\nYou can still keep in contact with friends and family over the phone or by other means. This is a way to maintain good wellbeing and mental health.",
      options: [
        "You stop going to crowded places and visiting other people’s houses",
        "You stop talking to the people you live with",
        "You stop speaking to your friends on the phone",
      ]
    },
    {
      id: 10,
      question: "How can people living with HIV protect themselves from COVID-19?",
      answer: [],
      explaination: "People living with HIV should follow the general advice for example washing their hands regularly. It’s also important to keep taking antiretroviral treatment as prescribed. Exercising, eating healthily and getting good sleep are ways to boost your immune system so that you stay healthy.\n\nCOVID-19 can also make lots of people feel anxious, so it’s important to look after your mental health too. Keep in touch with your friends and family online or over the phone, do things that you enjoy and talk how you are feeling. We all need to support each other during this time. ",
      options: [
        "Wash their hands regularly and follow the physical distancing advice",
        "Keep taking their antiretroviral treatment",
        "Exercise regularly, eat well and look after their mental health",
        "All of the above"
      ]
    },
  ];