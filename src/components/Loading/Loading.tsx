import LoadingStyled from "./Loading.styles";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="spinner">
        <div />
        <div />
      </div>
    </LoadingStyled>
  );
};

export default Loading;