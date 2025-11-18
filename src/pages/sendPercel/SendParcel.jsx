import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";


const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const serviceCEnters = useLoaderData();

  const regionsDuplicate = serviceCEnters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  // Watch selected regions
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("ReceiverRegion");

  const districtByRegion = (region) => {
    if (!region) return [];
    const regionDistrict = serviceCEnters.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return [...new Set(districts)]; // optional: make them unique too
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const sameDistrict = data.senderDistrict === data.ReceiverDistrict;
    console.log(sameDistrict)
  };

  return (
    <div>
      <h2 className="text-5xl font-semibold">Send a Parcel</h2>
      <form className="mt-12 p-4" onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              {...register("parcelType")}
              type="radio"
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              {...register("parcelType")}
              type="radio"
              value="non-document"
              className="radio"
            />
            Non Document
          </label>
        </div>

        {/* parcel info : name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              {...register("parcelName")}
              type="text"
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              {...register("parcelWeight")}
              type="text"
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sender info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold text-left">Sender Details</h4>

            <label className="label">Sender Name</label>
            <input
              {...register("senderName")}
              type="text"
              className="input w-full"
              placeholder="Sender Name"
            />

            <label className="label">Sender email</label>
            <input
              {...register("senderEmail")}
              type="email"
              className="input w-full"
              placeholder="Sender email"
            />

            {/* Sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Select a region
              </legend>
              <select
                {...register("senderRegion")}
                defaultValue=""
                className="select"
              >
                <option value="" disabled>
                  Pick a region
                </option>
                {regions.map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Select a District
              </legend>
              <select
                {...register("senderDistrict")}
                defaultValue=""
                className="select"
              >
                <option value="" disabled>
                  Pick a district
                </option>
                {districtByRegion(senderRegion).map((d, i) => (
                  <option value={d} key={i}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            <label className="label">Sender Address</label>
            <input
              {...register("senderAddress")}
              type="text"
              className="input w-full"
              placeholder="Sender Address"
            />

            <label className="label">Sender Phone Number</label>
            <input
              {...register("senderNumber")}
              type="text"
              className="input w-full"
              placeholder="Sender Number"
            />
          </fieldset>

          {/* receiver info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold text-left">
              Receiver Details
            </h4>

            <label className="label">Receiver Name</label>
            <input
              {...register("ReceiverName")}
              type="text"
              className="input w-full"
              placeholder="Receiver Name"
            />

            <label className="label">Receiver email</label>
            <input
              {...register("ReceiverEmail")}
              type="email"
              className="input w-full"
              placeholder="Receiver email"
            />

            {/* Receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Select a region
              </legend>
              <select
                {...register("ReceiverRegion")}
                defaultValue=""
                className="select"
              >
                <option value="" disabled>
                  Pick a region
                </option>
                {regions.map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Select a District
              </legend>
              <select
                {...register("ReceiverDistrict")}
                defaultValue=""
                className="select"
              >
                <option value="" disabled>
                  Pick a district
                </option>
                {districtByRegion(receiverRegion).map((d, i) => (
                  <option value={d} key={i}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            <label className="label">Receiver Address</label>
            <input
              {...register("ReceiverAddress")}
              type="text"
              className="input w-full"
              placeholder="Receiver Address"
            />

            <label className="label">Receiver Phone Number</label>
            <input
              {...register("ReceiverNumber")}
              type="text"
              className="input w-full"
              placeholder="Receiver Number"
            />
          </fieldset>
        </div>

        <input
          className="btn btn-primary text-black"
          type="submit"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
