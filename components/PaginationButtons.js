import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons({ searchResults }) {
  const router = useRouter();
  const start = parseInt(router.query.start) || 0;
  return (
    <div className='flex justify-between text-blue-700 mb-10 max-w-lg'>
      {start >= 10 && (
        <Link href={`search?val=${router.query.val}&start=${start - 10}`}>
          <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {searchResults && (
          <Link href={`search?val=${router.query.val}&start=${start + 10}`}>
            <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
              <ChevronRightIcon className='h-5' />
              <p>Next</p>
            </div>
          </Link>
        )}
    </div>
  );
}

export default PaginationButtons;
