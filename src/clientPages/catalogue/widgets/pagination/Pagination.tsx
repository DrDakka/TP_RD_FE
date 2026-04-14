type Props = {
  count: number;
  handler: (idx: number) => void;
  current: number;
};

export const Pagination: React.FC<Props> = ({ count }) => {
  return (
    <nav>
      <ol>
        <li>{count}</li>
      </ol>
    </nav>
  );
};
