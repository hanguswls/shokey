import "./Apply.css";
import plusIcon from "../assets/plus_icon.png";
import useApply from "../hooks/useApply";
import useApplication from "../hooks/useApplication";
import { useParams } from "react-router-dom";

function UpdateApplication() {
  const { applyId } = useParams();
  const { application } = useApplication(applyId);
  const {
    input,
    handleTitleChange,
    handleFileInputChange,
    handleDescriptionChange,
    handleUpdateClick,
    videoUrl,
    title,
    description
  } = useApply(application);

  return (
    <main className="apply">
      <section className="apply-inner">
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={handleTitleChange}
        />
        <figure>
          {
            videoUrl ? <video src={videoUrl} controls={true} /> :
            application?.videoUrl ? <video src={application?.videoUrl} controls={true} /> :
            <div>영상을 업로드해주세요.</div>
          }
          <button onClick={() => { input.current.click(); }}>
            <img src={plusIcon} alt="plus-icon" />
          </button>
          <input
            type="file"
            accept="video/*"
            ref={input}
            onChange={handleFileInputChange}
          />
        </figure>
        <textarea
          rows={8}
          value={description}
          placeholder="지원 내용"
          onChange={handleDescriptionChange}
        ></textarea>
        <button type="submit" onClick={(e) => handleUpdateClick(e, applyId)}>
          수정 완료
        </button>
      </section>
    </main>
  );
}

export default UpdateApplication;
