import { Button } from "./Button"
import { Company } from "./Company"

const Main = () => {
    return (
        <main className="mt-2 mb-10">
            <picture>
                <source media ="(min-width: 756px)" srcSet="./src/assets/desktop.png" />
                <img src="./src/assets/mobile.png" alt ="hero image" />
            </picture>
            <section className="w-90 mx-auto">
                <article className="mt-3 mb-5 text-center flex items-center flex-col gap-y-2">
                    <h1 className="text-almost text-xl font-bold">Make remote work</h1>
                    <p className="text-gray text-sm">
                        Get your team in sync, no matter your location. Streamline processes, create
                        team rituals, and watch productivity soar.
                    </p>
                    <Button text="Learn more" color="white" plus="max-w-[25rem]" />
                </article>
                <figure className="grid items-center grid-cols-4 gap-x-1">
                    <Company />
                </figure>
            </section>
        </main>
    )
}

export { Main }