function PropsComponent(props) {
  //     // 일반 할당 방식
  //   const tit = props.tit;
  //   const message = props.message;

  // 비구조화 할당방식
  const { tit, message } = props;
  return (
    <div className="PropsComponent">
      <h4>PropsComponent</h4>
      <p>
        tit : {tit} <br />
        message : {message} <br />
      </p>
    </div>
  );
}

export default PropsComponent;
