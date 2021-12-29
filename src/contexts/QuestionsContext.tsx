import { 
  createContext, 
  useState, 
  useEffect, 
  ReactNode } from "react";
  
import api from "../services/api";
import { createQuestions, QuestionProps } from "../utils/createQuestios";

interface QuestionsProviderProps {
  children: ReactNode;
}

interface QuestionscontextData {
  questions: QuestionProps[];
  loading: boolean;
  getData: () => void;
}

export const QuestionsContext = createContext<QuestionscontextData>(
  {} as QuestionscontextData
)

export const Questionsprovider = ({children}: QuestionsProviderProps) => {
  const [questions, setQuestions] = useState<QuestionProps[]>([] as QuestionProps[]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setloading(true)
      let response = await api.get('all');
      let { data } = response;
      
      setQuestions(createQuestions(data));
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return(
    <QuestionsContext.Provider
      value={{
        questions,
        loading, 
        getData
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

