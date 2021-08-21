
const projectData = [{
        "dir":'heart_disease',
        "title": "Heart Disease Prediction",
        "goal": "Create a Classification Model that can predict whether or not a person has presence of heart disease based on physical features of that person (age,sex, cholesterol, etc...)",
        "description": "This database contains 14 physical attributes based on physical testing of a patient. Blood samples are taken and the patient also conducts a brief exercise test. The goal field refers to the presence of heart disease in the patient. It is integer (0 for no presence, 1 for presence). In general, to confirm 100% if a patient has heart disease can be quite an invasive process, so if we can create a model that accurately predicts the likelihood of heart disease, we can help avoid expensive and invasive procedures.",
        "attributes": [
            "age",
            "sex",
            "cp",
            "trestbps",
            "chol",
            "fbs",
            "restecg",
            "thalach",
            "exang",
            "oldpeak",
            "slope",
            "ca",
            "thal"
        ],
        "attributes_info": [
            "age ",
            "sex 1=Male 0=Female",
            "chest pain type (1-4 value)",
            "resting blood pressure",
            "serum cholestoral in mg/dl",
            "fasting blood sugar > 120 mg/dl",
            "resting electrocardiographic results (values 0,1,2)",
            "maximum heart rate achieved",
            "exercise induced angina",
            "oldpeak = ST depression induced by exercise relative to rest",
            "the slope of the peak exercise ST segment",
            "number of major vessels (0-3) colored by flourosopy",
            "thal: 3 = normal; 6 = fixed defect; 7 = reversable defect"
        ],
        "mean_values": [
            63,
            1,
            3,
            145,
            233,
            1,
            0,
            150,
            0,
            2.3,
            0,
            0,
            1
        ],
        "metric": "accuracy: 0.84"
    }]

export default projectData