type PaginationProps = {
    currentPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
    currentPage,
    lastPage,
    onPageChange,
}: PaginationProps) {
    const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-end gap-2 text-sm">

            {/* Prev */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Prev
            </button>

            {/* Page numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 border rounded ${currentPage === page
                        ? "bg-red-600 text-white"
                        : "bg-white"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                disabled={currentPage === lastPage}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>

        </div>
    );
}