import "../styles/ExamLinks.scss";
import InfoCard from "./InfoCard";
import NewsBlock from "../components/NewsBlock";

function ExamLinks() {
  return (

<div className="cards-grid">

{/* <NewsBlock
  // image={`${process.env.PUBLIC_URL}/images/photo1.jpg`}
  text="Еще крупное обновление: алгеба, русский и геометрия"
/> */}

  <InfoCard 
    icon="🎓" 
    text="Реальные варианты ЕГЭ" 
    link="https://drive.google.com/drive/folders/1sm6-l75BYi0YjjDguOF9RwStJgrBxhBV?usp=drive_link" 
    animation="fade-right"
  />
  <InfoCard 
    icon="📚" 
    text="Реальные варианты ОГЭ" 
    link="https://drive.google.com/drive/folders/13gR0CSQt7MvG7Jh7K9xHkPFbGXn8fpwT?usp=drive_link" 
    animation="zoom-in" 
    delay={100}
  />
  <InfoCard 
    icon="📊 " 
    text="Google таблицы" 
    link="https://docs.google.com/spreadsheets/u/0/" 
    animation="fade-left" 
    delay={200}
  />
</div>


    // <div className="exam-links">
    //   <a href="https://drive.google.com/drive/folders/1sm6-l75BYi0YjjDguOF9RwStJgrBxhBV?usp=drive_link" target="_blank" rel="noopener noreferrer">
    //   🎓 Реальные варианты ЕГЭ
    //   </a>
    //   <a href="https://drive.google.com/drive/folders/13gR0CSQt7MvG7Jh7K9xHkPFbGXn8fpwT?usp=drive_link" target="_blank" rel="noopener noreferrer">
    //   📚 Реальные варианты ОГЭ
    //   </a>
    //   <a href="https://docs.google.com/spreadsheets/u/0/" target="_blank" rel="noopener noreferrer" className="gsheets-link">
    //     <img src={`${process.env.PUBLIC_URL}/images/google-sheets.jpg`} alt="Google Sheets" />
    //   </a>
    // </div>
  );
}

export default ExamLinks;
