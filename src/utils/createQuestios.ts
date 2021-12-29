interface Country {
  flags: {
    png: string,
    svg: string
  };
  name: {
    common: string,
    official: string
  };
  capital: string[];
}

export interface QuestionProps {
  question: string;
  correctOption: string;
  options: string[];
  img?: string | undefined;
}

export function createQuestions (arr: Country[]) {
    const questions: QuestionProps[] = [];

    while(questions.length < 10) {
      let questionType = Math.floor(Math.random() * (2 - 1 + 1) + 1);
      let question: QuestionProps = {
        question: '',
        correctOption: '',
        options: [],
      }
      let country = arr[Math.floor(Math.random() * arr.length)];

      if (questionType == 1) {
        question.question = `${country.capital[0]} is the capital of`;
      } else {
        question.question = `Which country does this flag belong to ?`
        question.img = country.flags.svg;
      }
      
      question.correctOption = country.name.common;
      question.options.push(country.name.common);
      arr.splice(arr.indexOf(country), 1);

      while(question.options.length < 4) {
        let option: Country = arr[Math.floor(Math.random() * arr.length)];

        if (question.correctOption != option.name.common) {
          question.options.push(option.name.common)
        }
        question.options.sort(()=> Math.random() - 0.5)
      }
      questions.push(question);
    }

    return questions;
}