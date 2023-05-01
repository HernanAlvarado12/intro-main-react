
const companies = ['./src/assets/databiz.svg', './src/assets/audiophile.svg', './src/assets/meet.svg', './src/assets/maker.svg']

const Company = () => {
    return companies.map((path, key) => <img key={key} src={path} />)
}

export { Company }