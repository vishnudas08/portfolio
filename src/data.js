import pythonIcon from './assets/image.png'
import project from './assets/project.png'
import project1 from './assets/project_attachment.jpg'
import project2 from './assets/project_attachment2.jpg'
import profilePicture from './assets/profile-image.png'

import excelIcon from './assets/skills/icons8-excel-48.png'
import powerbiIcon from './assets/skills/power-bi.png'
import pythonSkillIcon from './assets/skills/python-612.png'
import timeseriesIcon from './assets/skills/timeseries.jpg'
import excelSkillIcon from './assets/skills/excel-612.png'

// Project related images reading
import stockPrediction from './assets/projects/stockprediction/stock-prediction.png'
import stockPredictionAttachment from './assets/projects/stockprediction/stock-prediction-attachment.png'
import stockPredictionAttachment1 from './assets/projects/stockprediction/stock-prediction-attachment1.png'

import cnnProject from './assets/projects/cnn.png'

import nlpCertificate from './assets/certificates/NLP-certificate.jpg'
import DeeplearningCertificate from './assets/certificates/Deeplearning-certificate.jpg'
import python_data_scienceCertificate from './assets/certificates/python-certificate.jpg'
import sql_certificate from './assets/certificates/SQL-certificate.jpg'


export const fullname = 'DARLA VISHNU VARDHAN';
export const tagline = 'Aspiring machine learning engineer';
export const email = "vishnudaslog2002@gmail.com";
export const profileImage = profilePicture;
export const resumePath = "/resume.pdf";

export const links = {
  linkedin: {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/darla-vishnu-69763a224/"
  },
  github: {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vishnudas08"
  },
   hackerrank: {
    name: "Hackerrank",
    icon: "github",
    link: "https://www.hackerrank.com/profile/vishnudaslog2002"
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
    count: 1,
    label: "PowerBI Project",
  },
  {
    img: excelIcon,
    count: 1,
    label: "Excel Project",
  },
  {
    img: pythonIcon,
    count: 2,
    label: "PythonProject",
  }
];

export const projects = [
  {
    id: 1,
    title: "Image Classification with CNN",
    domain: "Computer Vision / Deep Learning",
    domainColor: "text-purple-600",
    image: cnnProject, // thumbnail image
    attachments: [project, project1, project2], // carousel images/screenshots
    overview:
      "Built two deep learning models using Convolutional Neural Networks (CNNs) to classify images — one for digit recognition (MNIST) and another for binary image classification (Cats vs Dogs). Models were built and trained from scratch using PyTorch.",
    details: {
      description: [
        "This project focuses on implementing CNN-based image classification models using PyTorch",

        " Model 1: Multi-class classification on the MNIST dataset (0–9 digits)",

        " Model 2: Binary classification to distinguish between cats and dogs using the Kaggle PetImages dataset.",

        " Real-time predictions were performed on custom images using OpenCV and PIL.",
      ]
      ,
      features: [
        "Trained CNNs from scratch using PyTorch",

        "Applied data preprocessing, resizing, normalization, and grayscale handling",

        "Achieved 99.15% test accuracy on MNIST",

        "Achieved 80.04% accuracy on Cats vs Dogs binary classification",

        "Evaluated model using confusion matrix, precision, recall, and F1-score",

        "Integrated external image prediction using real-world photos (via OpenCV and PIL)",

      ],
      challenges: [
        "Dealing with corrupted/empty images in the PetImages dataset",

        "Binary imbalance and noisy samples in dog vs cat classification",

        "Building a reliable model without using transfer learning",

        "Overfitting during training on smaller, noisy image samples",

      ],
      solution: [
        "Implemented an automated data cleaner using OpenCV to remove corrupted images",

        " Balanced dataset via proper train-test splitting",

        " Used Dropout, Batch Normalization, and early evaluation to prevent overfitting",

        " Leveraged BCELoss with Sigmoid activation for binary classification",

        " Used real-time prediction visualization for interpretability",
      ]

    },
    github: "https://github.com/your-username/image-classification-cnn", // ✅ Add GitHub link
    linkedin: "https://www.linkedin.com/posts/your-post-id", // ✅ Add LinkedIn engagement lin
    skills: [
      pythonSkillIcon
    ]
  },
  {
    id: 1,
    title: "📈 Stock Price Forecasting with LSTM + Technical Indicators",
    domain: "Time Series Forecasting / Deep Learning / Financial Analytics",
    domainColor: "text-purple-600",
    image: stockPrediction, // thumbnail image
    attachments: [stockPredictionAttachment, stockPredictionAttachment1], // carousel images/screenshots
    overview:
      "Built a deep learning model using LSTM (Long Short-Term Memory) to forecast future stock prices, integrating technical indicators like RSI, MACD, and EMA for enhanced prediction accuracy.",
    details: {
      description:
        "This project focuses on predicting future stock prices using deep learning techniques, specifically LSTM networks. It incorporates technical indicators and recent market trends to improve forecasting performance. The dataset includes historical stock price data (open, close, high, low, volume, etc.), and predictions are visualized for June 2025 using both Matplotlib and Plotly.",
      features: [
        "Collected and cleaned historical stock data from CSV",

        "Engineered features: RSI, MACD, EMA, momentum, rolling_std, etc.",

        "Applied MinMaxScaler to normalize the features",

        "Built an LSTM model with PyTorch for time series forecasting",

        "Forecasted closing prices for June 2025 with a 30-day horizon",

        "Visualized results using both static (Matplotlib) and interactive (Plotly) charts",

        "Achieved low error (RMSE < 5) on test data indicating high model accuracy"

      ],
      challenges: [
        "Short historical dataset leading to limited training samples",

        "Difficulty in modeling stock price volatility",

        "Technical indicators causing NaN values during early days",

        "Balancing LSTM sequence length with forecasting horizon",

      ],
      solution: [
        "Used ta library to calculate reliable technical indicators",

        "Handled NaNs by using .dropna() before model training",

        "Created custom feature sequences using a sliding window approach",

        "Regularized and trained the LSTM with batch size, learning rate, and hidden units tuning",

        " Designed a custom future forecasting function to iteratively predict next-day prices",
      ]



    },
    github: "https://github.com/your-username/image-classification-cnn", // ✅ Add GitHub link
    linkedin: "https://www.linkedin.com/posts/your-post-id", // ✅ Add LinkedIn engagement lin
    skills: [
      timeseriesIcon, pythonSkillIcon
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
      excelSkillIcon, powerbiIcon
    ]
  }

];

export const experiences = [

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