import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Eduardo Wasem"}
        picture={"https://github.com/ewasem.png"}
        rating={4}
        description={"Sapiranga - RS"}
      />
      <UserInformation
        name={"Rafael Wasem"}
        picture={""}
        rating={4}
        description={"Sapiranga - RS"}
      />
      <UserInformation
        name={"Daniel Wasem"}
        picture={
          "https://scontent.fpoa18-1.fna.fbcdn.net/v/t1.18169-9/291989_280736341948020_425328897_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=THRtLRjcbXoAX-q5NFQ&_nc_ht=scontent.fpoa18-1.fna&oh=1bc8180fa7f807301b84305157b8f677&oe=618657D8"
        }
        rating={4}
        description={"Sapiranga - RS"}
      />
      <UserInformation
        name={"Jorge Luiz Wasem"}
        picture={
          "https://scontent.fpoa18-1.fna.fbcdn.net/v/t1.6435-9/54257398_1192973260875426_2714765690119651328_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=c7i6ieH2UT4AX9C7aVE&tn=7c-rlIZYDFcTMAQ2&_nc_ht=scontent.fpoa18-1.fna&oh=5b44ca7f7db1038e948f32fd40a7c389&oe=6183FAC0"
        }
        rating={4}
        description={"Sapiranga - RS"}
      />
    </div>
  );
};

export default Home;
