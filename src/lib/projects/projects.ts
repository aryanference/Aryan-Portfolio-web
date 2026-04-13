export interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    repo?: string
    link?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Bayesian Model",
        description: "Bayesian modeling experiments and implementations.",
        tags: ["Python", "Bayesian"],
        repo: "https://github.com/usergotnewexp/Bayesian-Model-re"
    },
    {
        id: 2,
        title: "Regression Language Model (RLM)",
        description: "Regression-focused language model experiments and code.",
        tags: ["Python", "NLP", "Modeling"],
        repo: "https://github.com/usergotnewexp/Regression-Language-Model-RLM-"
    },
    {
        id: 3,
        title: "Pyspark Pipeline Implementation",
        description: "End-to-end PySpark pipeline for data processing and feature engineering.",
        tags: ["PySpark", "Data Engineering"],
        repo: "https://github.com/usergotnewexp/Pyspark-pipeline-implementation"
    },
    {
        id: 4,
        title: "Systemic Risk Simulation and Stress Testing",
        description: "Framework for simulating systemic risk and performing stress tests.",
        tags: ["Simulation", "Finance"],
        repo: "https://github.com/usergotnewexp/-Systemic-Risk-Simulation-and-Stress-Testing-Framework"
    },
    {
        id: 5,
        title: "Brain Tumor Research",
        description: "Medical imaging experiments and models for brain tumor analysis.",
        tags: ["Medical", "Deep Learning"],
        repo: "https://github.com/usergotnewexp/brain-tumor-res"
    },
    {
        id: 6,
        title: "Loan Default Prediction",
        description: "Models and pipelines for predicting loan defaults.",
        tags: ["ML", "Finance"],
        repo: "https://github.com/usergotnewexp/Loan-Deafult--prediction"
    },
    {
        id: 7,
        title: "Regression from Scratch",
        description: "Classic learning exercise: implementing regression algorithms from first principles.",
        tags: ["Python", "NumPy", "Machine Learning"],
        repo: "https://github.com/usergotnewexp/Regression-from-Scratch"
    },
    {
        id: 8,
        title: "Interpreter from Scratch",
        description: "Small interpreter implemented from scratch for language experiments.",
        tags: ["Language", "Interpreter"],
        repo: "https://github.com/usergotnewexp/Interpreter-scratch"
    },
    {
        id: 9,
        title: "SMS Spam Classifier",
        description: "Basic ML pipeline and model for classifying SMS spam messages.",
        tags: ["ML", "NLP"],
        repo: "https://github.com/usergotnewexp/sms-spam-classifier-ml-basics-"
    }
]
