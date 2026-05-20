export default function HeroTagline({ tagline }: { tagline?: string }) {
  return (
    <>
      {tagline ? (
        <p
          data-hero='tagline'
          className='text-n600 max-w-100 text-base leading-[1.55]'
        >
          {tagline}
        </p>
      ) : null}
    </>
  )
}
