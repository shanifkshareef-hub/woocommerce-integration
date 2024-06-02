import React from "react";
import { IAddress } from "src/interfaces/common";

const AddressCard: React.FC<{ address: IAddress }> = ({ address }) => {
  return (
    <div className="rounded-md shadow-md p-4 bg-white">
      <div className="grid grid-cols-1 text-sm">
        <p className="">{address.name}</p>
        <p className="">{address.address}</p>
        <p className="">{address.city}</p>
        <p className="">{address.state}</p>
        <p className="">{address.country}</p>
        <p className="">{address.pinCode}</p>
      </div>
    </div>
  );
};

export default AddressCard;
