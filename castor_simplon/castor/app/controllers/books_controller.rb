class BooksController < ApplicationController
    def index
        @books = Book.all
    end
    
    def create
        Book.create title: params[:title]
        redirect_to '/books'
    end
    
    def show
        @book = Book.find_by_id(params[:id])
    end
    
    def update
        Book.find_by_id(params[:id]).update title: params[:title]
        redirect_to "/books/#{params[:id]}"
    end
    
    def destroy
        Book.find_by_id(params[:id]).destroy
        redirect_to '/books'
    end
end
