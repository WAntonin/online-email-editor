const CodeStatus = ({
  language,
  isValid,
}: {
  language: "handlebars/html" | "json";
  isValid: boolean;
}) => {
  return (
    <div className={isValid ? "text-green-400" : "text-red-600"}>
      {isValid ? `Valid ${language}` : `Invalid ${language}`}
    </div>
  );
};

export default CodeStatus;
