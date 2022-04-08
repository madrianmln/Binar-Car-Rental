class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
          <div class="card shadow-sm mb-4">
              <div class="card-body card-mobil">
                  <img src="${this.image}" alt="gambar" class="img-fluid fotomobil-card ms-auto me-auto d-flex justify-content-center">
                  <h5 class="car-title pt-4">Nama/Tipe Mobil</h5>
                  <h2 class="car-price">Rp ${this.rentPerDay} / hari</h2>
                  <p class="car-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus vitae itaque illo, quaerat tempore veniam nemo perferendis laudantium culpa quibusdam! Repellendus beatae illum quibusdam asperiores dolores non, perferendis itaque.</p>
                  <div class="car-detail">
                      <div class="detail-item mb-3"><img src="./logo/fi_users.png" alt=""> ${this.capacity} </div>
                      <div class="detail-item mb-3"><img src="./logo/fi_settings.png" alt=""> ${this.transmission} </div>
                      <div class="detail-item mb-3"><img src="./logo/fi_calendar.png" alt=""> ${this.availableAt} </div>
                  </div>
                  <button class="btn btn-success w-100 mt-4">Pilih Mobil</button>
              </div>
          </div>
    `;
  }
}
