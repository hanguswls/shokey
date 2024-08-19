import './Apply.css';
import { useParams } from "react-router-dom";
import { handleTextareaChange } from "../utils/textareaHandler";
import plusIcon from '../assets/plus_icon.png';

function Apply() {
  const params = useParams();

  return (
    <main className="apply">
      <section className="apply-inner">
        <h1>공고 지원</h1>
        <input type="text" placeholder="제목"/>
        <figure>
          <img src="https://picsum.photos/500.jpg" alt="" />
          <button>
            <img src={plusIcon} alt="plus-icon" />
          </button>
        </figure>
        <textarea rows={8} onChange={handleTextareaChange} placeholder="지원 내용"></textarea>
        <button>
          지원하기
        </button>
      </section>
    </main>
  )
}

export default Apply;