class HighScoresController < ApplicationController
  # GET /high_scores
  # GET /high_scores.json
  def index
    @high_scores = HighScore.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @high_scores }
    end
  end


  # POST /high_scores
  # POST /high_scores.json
  def create
    @high_score = HighScore.new(params[:high_score])

    respond_to do |format|
      if @high_score.save
        format.html { redirect_to @high_score, notice: 'High score was successfully created.' }
        format.json { render json: @high_score, status: :created, location: @high_score }
      else
        format.html { render action: "new" }
        format.json { render json: @high_score.errors, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /high_scores/1
  # DELETE /high_scores/1.json
  def destroy
    @high_score = HighScore.find(params[:id])
    @high_score.destroy

    respond_to do |format|
      format.html { redirect_to high_scores_url }
      format.json { head :no_content }
    end
  end
end
