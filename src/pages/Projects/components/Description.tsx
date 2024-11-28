function Description({ text, title }: { text: string; title?: string }) {
  return (
    <div className="flex flex-col  gap-2">
      {title && (
        <h3 className="font-montserrat font-medium  text-3xl">{title}</h3>
      )}
      <p className="font-light font-poppins text-gray-700">{text}</p>
    </div>
  );
}

export default Description;
