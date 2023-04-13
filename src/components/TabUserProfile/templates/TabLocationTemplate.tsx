export interface UserLocation {
  street: {
    name: string;
    number: number;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export const TabLocationTemplate = (location: UserLocation) => {
  return (
    <>
      <div>
        <p>Street Name</p>
        <span>{location.street.name}</span>
      </div>
      <div>
        <p>Street Number</p>
        <span>{location.street.number}</span>
      </div>
      <div>
        <p>City</p>
        <span>{location.city}</span>
      </div>
      <div>
        <p>State</p>
        <span>{location.state}</span>
      </div>
      <div>
        <p>Country</p>
        <span>{location.country}</span>
      </div>
      <div>
        <p>Postcode</p>
        <span>{location.postcode}</span>
      </div>
    </>
  );
};
