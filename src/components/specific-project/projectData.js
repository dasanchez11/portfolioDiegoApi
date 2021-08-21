const heartProjectData = [
    {
        Type:'Logistic Regression',
        Taks:'Classification',
        Dataset_url:'https://archive.ics.uci.edu/ml/datasets/Heart+Disease',
        Description:'This database contains 14 physical attributes based on physical testing of a patient. Blood samples are taken and the patient also conducts a brief exercise test. The "goal" field refers to the presence of heart disease in the patient. It is integer (0 for no presence, 1 for presence). In general, to confirm 100% if a patient has heart disease can be quite an invasive process, so if we can create a model that accurately predicts the likelihood of heart disease, we can help avoid expensive and invasive procedures.',
        Metric:'',
        Metric_Score:'',
        Output:'Has Heart Disease',
        Parameters: [ 
        [{1:'Age',
        Param_desc:'in years'}],
        [{2:'Sex',
        Param_desc:'(1 = male; 0 = female)'}],
        [{3:'chest pain type ',
        Param_desc:'Value 1: typical angina Value 2: atypical anginaValue 3: non-anginal pain Value 4: asymptomatic'}],
        [{4:'resting blood pressure',
        Param_desc:'in mm Hg on admission to the hospital'}],
        [{5:'serum cholestoral ',
        Param_desc:'in mg/dl'}],
        [{6:'fasting blood sugar > 120 mg/dl',
        Param_desc:'(1 = true; 0 = false)'}],
        [{7:'resting electrocardiographic results (values 0,1,2)',
        Param_desc:'Value 0: normal Value 1: having ST-T wave abnormality  Value 2: showing probable or definite left ventricular hypertrophy by Estes criteria'}],
        [{8:'maximum heart rate achieved',
        Param_desc:''}],
        [{9:'exercise induced angina',
        Param_desc:' (1 = yes; 0 = no)'}],
        [{10:'oldpeak ',
        Param_desc:'ST depression induced by exercise relative to rest'}],
        [{11:'the slope of the peak exercise ST segment',
        Param_desc:'Value 1: upsloping Value 2: flat Value 3: downsloping'}],
        [{12:'number of major vessels ',
        Param_desc:'(0-3) colored by flourosopy'}],
        [{13:'thal: ',
        Param_desc:'3 = normal; 6 = fixed defect; 7 = reversable defect'}],
        ]
    }
        
]                   

export default heartProjectData