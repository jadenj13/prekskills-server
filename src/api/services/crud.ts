import * as mongoose from 'mongoose';

abstract class CrudService<T extends mongoose.Document> {
  abstract Model: mongoose.Model<T>;

  public create = (params: T) => {
    const model = new this.Model(params);

    return model.save();
  };

  public getById = (id: string) => this.Model.findById(id);

  public getAll = () => this.Model.find({});

  public update = (id: string, params: T) =>
    this.Model.findByIdAndUpdate(id, params);

  public deleteById = (id: string) => this.Model.findByIdAndDelete(id);
}

export default CrudService;
