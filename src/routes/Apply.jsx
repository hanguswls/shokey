import './Apply.css';
import plusIcon from '../assets/plus_icon.png';
import useApply from '../hooks/useApply';


function Apply() {
  const {
    input,
    handleTitleChange,
    handleFileInputChange,
    handleDescriptionChange,
    handleSubmitClick,
    videoUrl
  } = useApply();
  
  return (
    <main className="apply">
      <section className="apply-inner">
        <h1>공고 지원</h1>
        <input type="text" placeholder="제목" onChange={handleTitleChange}/>
        <figure>
          {
            videoUrl ? <video src={videoUrl} controls={true}/> : 
              <div>
                영상을 업로드해주세요.
              </div>
          }
          <button onClick={() => {
            input.current.click();
          }}>
            <img src={plusIcon} alt="plus-icon" />
          </button>
          <input type="file" accept='video/*' ref={input} onChange={handleFileInputChange} />
        </figure>
        <textarea rows={8} placeholder="지원 내용" onChange={handleDescriptionChange}></textarea>
        <button type='submit' onClick={handleSubmitClick}>
          지원하기
        </button>
      </section>
    </main>
  )
}

export default Apply;