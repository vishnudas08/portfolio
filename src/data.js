import pythonIcon from './assets/image.png'
import project from './assets/project.png'
import project1 from './assets/project_attachment.jpg'
import project2 from './assets/project_attachment2.jpg'
// import profilePicture from './assets/profile-image.png'
import profilePicture from './assets/Vishnu_btech.png'

// Skill related images
import transformersIcon from './assets/skills/transformer.png' 
import pytorchIcon from './assets/skills/pytorch-612.png'
import textmodel from './assets/skills/textmodel.png'
import ragbot from './assets/skills/Rentalbot.png'
import braintumorImg from './assets/projects/braintumorImg.jpg'
import dlIcon from './assets/skills/dl.png'

import powerbiIcon from './assets/skills/power-bi.png'
import pythonSkillIcon from './assets/skills/python-612.png'
import timeseriesIcon from './assets/skills/timeseries.jpg'
import excelSkillIcon from './assets/skills/excel-612.png'

// Project related images reading
import opIcon from './assets/projects/op.png'
import bertIcon from './assets/projects/bert.png'
import cnnModel from './assets/projects/CNNModel.png'
import trainingPreds from './assets/projects/training.png'
import textClassificationmainImage from './assets/projects/text.png'
import stockPrediction from './assets/projects/stockprediction/stock-prediction.png'
import stockPredictionAttachment from './assets/projects/stockprediction/stock-prediction-attachment.png'
import stockPredictionAttachment1 from './assets/projects/stockprediction/stock-prediction-attachment1.png'

import cnnProject from './assets/projects/cnn.png'

import nlpCertificate from './assets/certificates/NLP-certificate.jpg'
import DeeplearningCertificate from './assets/certificates/Deeplearning-certificate.jpg'
import python_data_scienceCertificate from './assets/certificates/python-certificate.jpg'
import sql_certificate from './assets/certificates/SQL-certificate.jpg'


export const fullname = 'DARLA VISHNU VARDHAN';
export const tagline = 'Building intelligent systems at the intersection of Computer Vision, NLP, and real-world impact.';
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
  { name: "Python", level: "Expert" },
  { name: "PyTorch", level: "Expert" },
  { name: "CNN / Vision Transformers", level: "Advanced" },
  { name: "NLP", level: "Advanced" },
  { name: "RAG & LLM Engineering", level: "Advanced" },
  { name: "Semantic Segmentation", level: "Advanced" },
  { name: "Time Series Forecasting", level: "Advanced" },
  { name: "Model Deployment", level: "Advanced" },
  { name: "FastAPI / Backend APIs", level: "Advanced" },
  { name: "Data Analysis (Pandas / NumPy)", level: "Advanced" },
  { name: "SQL & Data Handling", level: "Advanced" },
  { name: "Power BI / Visualization", level: "Intermediate" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "Linux / Environment Setup", level: "Intermediate" },
];

export var projectStats = [
  {
    img: powerbiIcon,
    count: 1,
    label: "PowerBI Project",
  },
  {
    img: dlIcon,
    count: 1,
    label: "Deep Learning Project",
   
  },
  {
    img: pythonIcon,
    count: 3,
    label: "PythonProject",
  }
];

export const projects = [
   
{
  id: 6,
  title: "AI-Powered Brain Tumor Segmentation: From YOLO to Vision Transformers",
  domain: "Computer Vision / Deep Learning / Image Segmentation",
  domainTag: "CV",
  domainColor: "text-purple-600",
  caseStudyUrl: "https://github.com/vishnudas08/brain-tumor-segmentation",
  problem: "Need accurate and fast tumor segmentation from MRI scans to assist clinical diagnosis.",
  approach: "Built a modular pipeline with YOLO11 for real-time tumor localization and SegFormer for precise mask prediction; used class-balanced losses and heavy augmentation.",
  results: "Achieved 92% Dice score and 0.18s inference time per slice in validation set.",
  image: braintumorImg,
  attachments: [braintumorImg],
  overview:
    "Built an end-to-end AI pipeline for brain tumor segmentation from MRI scans, " +
    "tackling a critical real-world healthcare problem. Engineered automated data preprocessing, " +
    "trained a YOLO11 model for high-speed instance segmentation, and benchmarked advanced " +
    "architectures — U-Net, DeepLabV3, RAAGR2-Net, and fine-tuned SegFormer — to deliver " +
    "state-of-the-art medical precision across full-cycle computer vision workflows.",
  details: {
    description: [
      "Designed and implemented a complete MRI brain tumor segmentation pipeline covering data ingestion, preprocessing, model training, and evaluation across multiple architectures.",
      "Trained a YOLO11 model for real-time instance segmentation, achieving high-speed inference suitable for clinical decision-support workflows.",
      "Benchmarked and compared U-Net, DeepLabV3, RAAGR2-Net, and fine-tuned SegFormer to identify the optimal architecture for medical-grade pixel-level accuracy.",
      "Delivered a scalable, modular codebase enabling reproducible experiments and straightforward adaptation to other medical imaging segmentation tasks.",
    ],
    features: [
      "Automated MRI data preprocessing pipeline with augmentation and normalization",
      "YOLO11 instance segmentation for high-speed, real-time tumor detection",
      "U-Net encoder-decoder architecture for precise pixel-level segmentation",
      "DeepLabV3 with atrous convolutions for multi-scale context capture",
      "RAAGR2-Net with recurrent attention gates for refined boundary detection",
      "Fine-tuned SegFormer — Vision Transformer-based architecture for SOTA accuracy",
      "Comprehensive benchmarking suite: Dice score, IoU, precision, recall, F1",
      "Visual overlays and mask comparison tools for qualitative evaluation",
      "Modular pipeline design supporting plug-and-play model experimentation",
    ],
    challenges: [
      "Handling severe class imbalance between tumor and non-tumor pixels in MRI datasets",
      "Preserving fine-grained tumor boundary details across varied MRI scan qualities",
      "Balancing inference speed (YOLO) vs segmentation precision (SegFormer) for clinical use",
      "Fine-tuning Vision Transformers with limited labeled medical imaging data",
      "Ensuring consistent preprocessing across heterogeneous MRI acquisition protocols",
    ],
    solution: [
      "Applied weighted loss functions (Dice + BCE combo) to address pixel-level class imbalance",
      "Used aggressive data augmentation — flipping, elastic deformation, intensity shifts — to improve generalization",
      "Benchmarked latency-accuracy tradeoff across all models to guide deployment decisions",
      "Leveraged transfer learning and domain-specific fine-tuning to maximize SegFormer performance on limited data",
      "Standardized preprocessing steps into a reusable module ensuring reproducibility across all architectures",
    ],
  },
},
 
  {
    id: 5,
    title: "🤖 RAG Chatbot (FastAPI + Offline LLMs + RAG)",
    domain: "Generative AI / Backend Development / NLP",
    domainTag: "NLP",
    domainColor: "text-green-600",
    caseStudyUrl: "https://github.com/vishnudas08/rag-chatbot-fastapi",
    problem: "Customer support workflows waste time, lack context and require manual document lookup.",
    approach: "Built RAG pipeline using FastAPI + local LLM & embeddings to answer queries from PDF KB with semantic search and prompt templates.",
    results: "Reduced average response time by 78% in simulation and maintained 93% answer relevance score on test questions.",
    image: ragbot,
    attachments: [ragbot],
    overview:
      "Built an intelligent customer service chatbot for a dumpster rental company using Retrieval Augmented Generation (RAG). The assistant answers customer questions by retrieving information from a PDF knowledge base and responds in a friendly, natural tone — just like a real support agent.",
    details: {
      description: [
        "Developed a production-ready RAG chatbot backend that automates customer service inquiries for a dumpster rental company.",
        "The system intelligently retrieves relevant information from a PDF knowledge base and generates contextually accurate responses without exposing source documents to users.",
        "Designed with offline capability using local LLMs for privacy and cost efficiency, eliminating dependency on external APIs.",
      ],
      features: [
        "PDF ingestion pipeline with automatic text chunking and processing",
        "Vector embeddings for semantic search using embedding models",
        "Retrieval Augmented Generation (RAG) pipeline for context-aware responses",
        "FastAPI backend for high-performance, scalable API endpoints",
        "Offline LLM integration for privacy-preserving inference",
        "Natural language responses matching real support agent tone and style",
        "Contextual answer generation based on retrieved PDF content",
        "Support for customer inquiries about pricing, dumpster sizes, delivery windows, policies",
        "Service availability and policy documentation automation",
      ],
      challenges: [
        "Ensuring retrieved context is relevant and concise for accurate responses",
        "Maintaining natural conversational tone while using retrieved information",
        "Optimizing embedding and retrieval speed for real-time responses",
        "Managing large PDF documents with varied formats and structures",
        "Balancing offline capability with model performance and response quality",
      ],
      solution: [
        "Implemented intelligent text chunking strategies with overlap for context preservation",
        "Fine-tuned prompt engineering to blend retrieved information naturally into responses",
        "Used vector similarity search with cosine distance for efficient retrieval",
        "Built robust PDF parsing pipeline handling various document formats",
        "Optimized model quantization for fast offline inference on standard hardware",
      ]
    },
    github: "https://github.com/vishnudas08/rag-chatbot-fastapi",
   
  },
  {
    id: 1,
    title: "Image Classification with CNN",
    domain: "Computer Vision / Deep Learning",
    domainTag: "CV",
    caseStudyUrl: "https://github.com/vishnudas08/Digit-Recognition-using-CNN",
    problem: "Need robust computer vision model for handwritten digit and cat/dog classification with limited dataset quality.",
    approach: "Built CNN models end-to-end with PyTorch, applied augmentation, grayscale normalization, and dropout to reduce overfitting.",
    results: "Achieved 99.15% accuracy on MNIST and 80.04% cats vs dogs, with production ready inference pipeline.",
    domainColor: "text-purple-600",
    image: cnnProject, // thumbnail image
    attachments: [trainingPreds, cnnModel,project1], // carousel images/screenshots
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
    github: "https://github.com/vishnudas08/Digit-Recognition-using-CNN", // ✅ Add GitHub link
    github2:"https://github.com/vishnudas08/binary-image-classification_PyTorch",
    linkedin: "https://www.linkedin.com/in/darla-vishnu-69763a224/",
    skills: [
      pythonSkillIcon
    ]
  },
  {
    id: 9,
    title: "📈 Stock Price Forecasting with LSTM + Technical Indicators",
    domain: "Time Series Forecasting / Deep Learning / Financial Analytics",
    domainTag: "Finance",
    caseStudyUrl: "https://github.com/vishnudas08/stock-price-forecasting",
    problem: "Financial data is noisy and hard to model; stakeholders need accurate next-day stock price forecasts.",
    approach: "Engineered RSI/MACD/EMA indicators and trained LSTM with 60-day lookback, using MinMaxScaler and sequential data windows.",
    results: "Delivered 92% directional accuracy on AAPL test set and reduced forecasting RMSE below 5.",
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
    id: 10,
    title: "Small AI Tool for Text Classification using BERT",
    domain: "  NLP (Text Classification) / Transformers / Deep Learning",
    domainColor: "text-purple-600",
    image:textClassificationmainImage, // thumbnail image
    attachments: [textmodel,bertIcon, opIcon], // carousel images/screenshots
    overview:
      " Tools: Python, PyTorch, Hugging Face Transformers, BERT, AG News Dataset",
    details: {
      description:
        "Designed a lightweight yet effective NLP tool that leverages the BERT transformer architecture to classify news headlines into four categories. This project demonstrates the practical application of transfer learning and deep learning techniques for text classification.",
      features: [
        "Built using PyTorch and Hugging Face Transformers (bert-base-uncased)",

  "Automated preprocessing, tokenization, and batching of text using DataLoader",

 "Achieved ~85% validation accuracy on the AG News dataset",

  "Integrated stratified sampling to handle class imbalance",

"Created an inference pipeline for real-time predictions",
       
      ],
      challenges: [
        "Model overfitting on reduced datasets",

   "GPU memory limitations during fine-tuning",

   "Handling long text truncation without losing context",
       
      ],
      solution:[
        "Added Dropout layers and used CrossEntropyLoss + Adam Optimizer",

   " Used truncation & padding strategies to ensure consistent input formats",

" Balanced training data with stratified sampling to maintain class representation",

" Deployed the model using an interactive Python interface (notebook-based)",
      ]
       
    },
    github: "https://github.com/your-username/image-classification-cnn", // ✅ Add GitHub link
    linkedin: "https://www.linkedin.com/posts/your-post-id", // ✅ Add LinkedIn engagement lin
    skills: [
    transformersIcon,pytorchIcon, pythonSkillIcon
  
    ]
  }

];

export const experiences = [
  {
    role: "Freelance Machine Learning Engineer",
    company: "Upwork · Freelance",
    duration: "Jun 2025 - Present",
    responsibilities: [
      "Delivered production-ready AI solutions for clients in tech and data domains.",
      "Completed key Upwork project developing/updating a deduction model on breadboard system, with client satisfaction and successful submission.",
      "Specialized in practical ML deployment and GenAI customization.",
      "Fine-tuning pre-trained models for NLP tasks including text classification, sentiment analysis, and language understanding using HuggingFace Transformers.",
      "Recently completed LLM course on HuggingFace, practicing fine-tuning models for custom NLP problems and real-world applications.",
      "Developing and optimizing computer vision models for image classification, image segmentation, and object detection tasks using PyTorch.",
      "Recently delivered deduction model project via Upwork, showcasing model updates, testing, and client handover on breadboard system.",
      "Expertise with PyTorch for regression models (e.g., employee bonus prediction, linear/logistic), iris classification, and deep learning models.",
      "Advanced GenAI skills: RAG for custom LLMs, prompt engineering, fine-tuning architectures using HuggingFace ecosystem.",
    ],
    technologies: [
      "PyTorch", "HuggingFace", "Transformers", "Random Forest", "Scikit-learn", "OpenCV", "GenAI", "RAG", "LLMs", "NLP Fine-tuning", "Image Segmentation", "Object Detection", "GitHub"
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