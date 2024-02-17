import pkg from "@material-tailwind/react"
const { Typography } = pkg

const LINKS = [
  {
    title: "O nama",
    items: [
      {
        text: "Politika privatnosti",
        href: "",
      },
      {
        text: "Impressum",
        href: "",
      },
    ],
  },
  {
    title: "Kontakt",
    items: [
      {
        text: "info@weblifesupport.com",
        href: "mailto:info@weblifesupport.com",
      },
      {
        text: "+385 (0) 99 7988 790",
        href: "tel:+385997988790",
      },
      {
        text: "Whatsapp",
        href: "https://wa.me/+385997988790?text=Pozdrav,%20zanima%20me%20usluga%20izrade%20web%20stranice.",
      },
    ],
  },
]

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative w-full pt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-20 md:grid-cols-2">
          <span className="text-lg sm:text-3xl xl:text-5xl tracking-wider text-themeColor py-10 px-5 text-center">
            Web Life Support
          </span>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                  placeholder={""}
                >
                  {title}
                </Typography>
                {items.map((item) => (
                  <li key={item.text}>
                    <Typography
                      as="a"
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      placeholder={""}
                    >
                      {item.text}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            placeholder={""}
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">WLS</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}
