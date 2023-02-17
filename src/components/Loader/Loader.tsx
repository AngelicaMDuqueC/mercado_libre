type LoaderProps = {
  loadingText: string;
};

export const Loader = ({ loadingText }: LoaderProps) => <div>{loadingText && <h1>{loadingText}</h1>}</div>;
