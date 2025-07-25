import pythonIcon from './assets/image.png'
import project from './assets/project.png'
import project1 from './assets/project_attachment.jpg'
import project2 from './assets/project_attachment2.jpg'
import profilePicture from './assets/profile-image.png'

import excelIcon from './assets/skills/icons8-excel-48.png'
import powerbiIcon from './assets/skills/power-bi.png'



import nlpCertificate from './assets/certificates/NLP-certificate.jpg'
import DeeplearningCertificate from './assets/certificates/Deeplearning-certificate.jpg'
import python_data_scienceCertificate from './assets/certificates/python-certificate.jpg'
import sql_certificate from './assets/certificates/SQL-certificate.jpg'


export const fullname = 'DARLA VISHNU VARDHAN';
export const tagline = 'Data Scientist';
export const email = "namratapatel091@gmail.com";
export const profileImage = profilePicture;

export const links = {
  linkedin: {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/darla-vishnu-vardhan-3b5a5b1b7/"
  },
  github: {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DarlaVishnu"
  }
}

export const skills = [
  "PYTHON",
  "PYTORCH",
  'CONVULUTIONAL NEURAL NETWORKS',
  'TRANSFORMERS',
  "EXCEL",
  "POWERBI",
  "SQL",

  "PRESENTATION SKILLS",
  "COMMUNICATION SKILLS",
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "MODEL TRAINING",

];

export var projectStats = [
  {
    img: powerbiIcon,
    count: 2,
    label: "PowerBI Project",
  },
  {
    img: excelIcon,
    count: 3,
    label: "Excel Project",
  },
  {
    img: pythonIcon,
    count: 1,
    label: "PythonProject",
  }
];

export const projects = [
  {
    id: 1,
    title: "Image Classification with CNN",
    domain: "Computer Vision / Deep Learning",
    domainColor: "text-purple-600",
    image: project, // thumbnail image
    attachments: [project, project1, project2], // carousel images/screenshots
    overview:
      "Built a deep learning model to classify images into categories using Convolutional Neural Networks (CNNs) trained on a custom dataset.",
    details: {
      description:
        "This project focuses on developing a robust image classification model using CNNs in Python with TensorFlow and Keras. The model was trained on a dataset containing 10,000+ labeled images across 5 categories such as dogs, cats, birds, cars, and flowers.",
      features: [
        "Used data augmentation to increase model robustness",
        "Implemented transfer learning with MobileNetV2",
        "Achieved 92% accuracy on test dataset",
        "Visualized model predictions with Grad-CAM"
      ],
      challenges: [
        "Overfitting due to small dataset size",
        "Uneven class distribution",
        "Hardware limitations while training large models"
      ],
      solution:
        "Utilized real-time data augmentation and early stopping to reduce overfitting, employed pre-trained models to improve accuracy, and optimized the training pipeline for GPU usage."
    },
    github: "https://github.com/your-username/image-classification-cnn", // ✅ Add GitHub link
    linkedin: "https://www.linkedin.com/posts/your-post-id", // ✅ Add LinkedIn engagement lin
    skills: [
      excelIcon, powerbiIcon
    ]
  },
  {
    id: 1,
    title: "Image Classification with CNN",
    domain: "Computer Vision / Deep Learning",
    domainColor: "text-purple-600",
    image: project, // thumbnail image
    attachments: [project, project1, project2], // carousel images/screenshots
    overview:
      "Built a deep learning model to classify images into categories using Convolutional Neural Networks (CNNs) trained on a custom dataset.",
    details: {
      description:
        "This project focuses on developing a robust image classification model using CNNs in Python with TensorFlow and Keras. The model was trained on a dataset containing 10,000+ labeled images across 5 categories such as dogs, cats, birds, cars, and flowers.",
      features: [
        "Used data augmentation to increase model robustness",
        "Implemented transfer learning with MobileNetV2",
        "Achieved 92% accuracy on test dataset",
        "Visualized model predictions with Grad-CAM"
      ],
      challenges: [
        "Overfitting due to small dataset size",
        "Uneven class distribution",
        "Hardware limitations while training large models"
      ],
      solution:
        "Utilized real-time data augmentation and early stopping to reduce overfitting, employed pre-trained models to improve accuracy, and optimized the training pipeline for GPU usage."
    },
    github: "https://github.com/your-username/image-classification-cnn", // ✅ Add GitHub link
    linkedin: "https://www.linkedin.com/posts/your-post-id", // ✅ Add LinkedIn engagement lin
    skills: [
      excelIcon, powerbiIcon
    ]
  },
  {
    id: 1,
    title: "Image Classification with CNN",
    domain: "Computer Vision / Deep Learning",
    domainColor: "text-purple-600",
    image: project, // thumbnail image
    attachments: [project, project1, project2], // carousel images/screenshots
    overview:
      "Built a deep learning model to classify images into categories using Convolutional Neural Networks (CNNs) trained on a custom dataset.",
    details: {
      description:
        "This project focuses on developing a robust image classification model using CNNs in Python with TensorFlow and Keras. The model was trained on a dataset containing 10,000+ labeled images across 5 categories such as dogs, cats, birds, cars, and flowers.",
      features: [
        "Used data augmentation to increase model robustness",
        "Implemented transfer learning with MobileNetV2",
        "Achieved 92% accuracy on test dataset",
        "Visualized model predictions with Grad-CAM"
      ],
      challenges: [
        "Overfitting due to small dataset size",
        "Uneven class distribution",
        "Hardware limitations while training large models"
      ],
      solution:
        "Utilized real-time data augmentation and early stopping to reduce overfitting, employed pre-trained models to improve accuracy, and optimized the training pipeline for GPU usage."
    },
    github: "https://github.com/your-username/image-classification-cnn", // ✅ Add GitHub link
    linkedin: "https://www.linkedin.com/posts/your-post-id", // ✅ Add LinkedIn engagement lin
    skills: [
      excelIcon, powerbiIcon
    ]
  }

];

export const experiences = [
  {
    role: "AI/ML Intern",
    company: "Pixonate Labs, Pune",
    duration: "June 2025 - Present",
    responsibilities: [
      "Built and trained machine learning models for business projects using Python, TensorFlow, and PyTorch.",
      "Created computer vision systems for object detection and image segmentation using OpenCV.",
      "Developed interactive dashboards using React, HTML, and CSS.",
      "Implemented advanced neural network techniques for image processing.",
      "Streamlined project workflows using Git, Jupyter Notebooks, and Docker.",
    ],
    technologies: [
      "Python", "TensorFlow", "PyTorch", "OpenCV", "React",
      "HTML", "CSS", "Git", "Docker", "Jupyter Notebooks"
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Indian Servers",
    duration: "March 2024 - June 2024",
    responsibilities: [
      "Developed stock price prediction models using regression algorithms.",
      "Analyzed financial datasets and visualized model performance.",
      "Explored LSTM and RNN architectures for time series forecasting.",
      "Collaborated using GitHub and maintained reproducible notebooks.",
    ],
    technologies: [
      "Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "GitHub"
    ],
  },
];


export const certificates = [
   {
    title: "Deep Learning Beginner to Advanced",
    src: DeeplearningCertificate,
  },
  {
    title: "Introduction to Transformer based NLP",
    src: nlpCertificate,
  },
  {
    title: "Python Data Science",
    src: python_data_scienceCertificate,
  },
  {
    title: "SQL Relational Database",
    src: sql_certificate,
  },
  
];
// bio, email

export const projectLinks = [
  {
    name: "GitHub Repository",
    icon: null,
    link: "https://github.com/your-username/image-classification-cnn"
  },
  {
    name: "Project Report",
    icon: null,
    link: "https://your-portfolio.com/image-classification-report"
  }
];