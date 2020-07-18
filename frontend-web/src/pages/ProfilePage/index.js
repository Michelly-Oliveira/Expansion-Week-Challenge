import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Adilson Vicente</h1>
        <h2>@adilsonvicente</h2>

        <p>
          Developer at
          <a href="https://www.foursys.com.br"> @Foursys</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Apucarana, Paraná
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 02 Setembro de 1985
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong> 94 </strong>
          </span>

          <span>
            <strong> 100 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
