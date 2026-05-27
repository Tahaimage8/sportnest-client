"use client";

import { Button, Dropdown, Label, SearchField } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FacilitySearchFilter = ({ defaultSearch = "", defaultType = "" }) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(defaultSearch);
  const [type, setType] = useState(defaultType);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();

      if (searchQuery) {
        params.set("search", searchQuery);
      }

      if (type) {
        params.set("type", type);
      }

      const queryString = params.toString();

      router.push(queryString ? `/facilities?${queryString}` : "/facilities");
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, type, router]);

  return (
    <form className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left Filter */}
      <div className="w-full md:w-64">
        <Dropdown>
          <Button
            type="button"
            variant="secondary"
            className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {type || "Filter by sport type"}
          </Button>

          <Dropdown.Popover>
            <Dropdown.Menu
              onAction={(key) => setType(key === "all" ? "" : String(key))}
            >
              <Dropdown.Item id="all" textValue="All Facilities">
                <Label>All Facilities</Label>
              </Dropdown.Item>

              <Dropdown.Item id="Football Turf" textValue="Football Turf">
                <Label>Football Turf</Label>
              </Dropdown.Item>

              <Dropdown.Item id="Cricket Net" textValue="Cricket Net">
                <Label>Cricket Net</Label>
              </Dropdown.Item>

              <Dropdown.Item id="Badminton Court" textValue="Badminton Court">
                <Label>Badminton Court</Label>
              </Dropdown.Item>

              <Dropdown.Item id="Tennis Court" textValue="Tennis Court">
                <Label>Tennis Court</Label>
              </Dropdown.Item>

              <Dropdown.Item id="Swimming Lane" textValue="Swimming Lane">
                <Label>Swimming Lane</Label>
              </Dropdown.Item>

              <Dropdown.Item id="Basketball Court" textValue="Basketball Court">
                <Label>Basketball Court</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>

      {/* Right Search + Button */}
      <div className="flex w-full flex-row gap-3 md:w-auto md:items-center">
        <SearchField
          name="search"
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full sm:w-96"
        >
          <SearchField.Group className="h-12 rounded-xl border border-slate-300 bg-white px-3">
            <SearchField.SearchIcon />

            <SearchField.Input
              className="w-full outline-none"
              placeholder="Search by facility name"
            />

            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Button
          type="button"
          className="h-12 rounded-xl bg-green-600 px-5 font-semibold text-white hover:bg-green-700"
        >
          <Search size={18} />
        </Button>
      </div>
    </form>
  );
};

export default FacilitySearchFilter;