import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper';
import JobPage from './JobPage';

export default function Job(){
  return (
    <RootLayout>
      <Wrapper>
        <JobPage />
      </Wrapper>
    </RootLayout>
  )
}