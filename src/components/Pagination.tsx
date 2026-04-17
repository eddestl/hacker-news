import Button from 'react-bootstrap/esm/Button'

type PaginationProps = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
  page: number;
  total: number;
  
};

const Pagination: React.FC<PaginationProps> = ({
	hasNextPage,
	hasPreviousPage,
	onNextPage,
	onPreviousPage,
	page,
	total

}) =>{
	return (
		<div className="d-flex justify-content-between align-items-center">
			<div className="prev">
			<Button variant="primary"
			disabled={!hasPreviousPage}
			onClick={(onPreviousPage)}
			>Previous Page</Button>
		</div>

		<div className="page">{page} / {total}</div>

		<div className="next">
			<Button variant="primary"
			disabled={!hasNextPage}
			onClick={(onNextPage)}
			>Next Page</Button>
		</div>
	</div>
	)
}

export default Pagination