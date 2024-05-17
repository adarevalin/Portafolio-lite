export const Logo = (props: { size: number }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 16L9.5 1L9.5 5L5.5 16H1Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 16L8.5 1L8.5 5L12.5 16H17Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 3.25C1 2.00736 2.00736 1 3.25 1H15.25C16.4926 1 17.5 2.00736 17.5 3.25V15.25C17.5 16.4926 16.4926 17.5 15.25 17.5H3.25C2.00736 17.5 1 16.4926 1 15.25V3.25Z'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
