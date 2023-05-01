import { Button } from "./Button"
import { Company } from "./Company"

const Main = () => {
    return (
        <main className="mt-2 mb-10 md:w-85 md:h-main md:mx-auto md:m-0 md:grid md:grid-cols-2">
            <picture className="md:order-1">
                <source media ="(min-width: 900px)" srcSet="./src/assets/desktop.png" />
                <img className="max-h-[50rem] mx-auto" src="./src/assets/mobile.png" alt ="hero image" />
            </picture>
            <section className="w-90 mx-auto">
                <article className="mt-3 mb-5 text-center flex items-center flex-col gap-y-2 sm:mt-5 sm:mb-7 md:items-start md:text-start">
                    <h1 className="text-almost text-xl font-bold md:text-2xl">Make remote work</h1>
                    <p className="text-gray text-sm">
                        Get your team in sync, no matter your location. Streamline processes, create
                        team rituals, and watch productivity soar.
                    </p>
                    <Button text="Learn more" color="white" plus="max-w-[25rem] md:max-w-[20rem]" />
                </article>
                <figure className="grid items-center justify-items-center grid-cols-4 gap-x-1">
                    <Company />
                </figure>
            </section>
        </main>
    )
}

export { Main }