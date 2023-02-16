type LoaderProps = {
  loadingText: string;
};

export const Loader = ({ loadingText }:LoaderProps) => (
  <div>
    {loadingText && <p>{loadingText}</p> }
  </div>
);