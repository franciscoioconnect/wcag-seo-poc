import FourthSection from '@/components/main-page/fourth-section'
import Layout from '@/components/layout'
import FirstSection from '@/components/main-page/first-section'
import SecondSection from '@/components/main-page/second-section'
import ThirdSection from '@/components/main-page/third-section'

export default function Home() {
  return (
    <Layout>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
    </Layout>

  )
}
